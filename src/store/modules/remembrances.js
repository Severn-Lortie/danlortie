import firebase from '../../firebaseConfig';
import Vue from 'vue';

const remembrances = {
    state: {
        emails: {},
    },
    mutations: {
        addEmail(state, email) {
            Vue.set(state.emails, email.id, email);
        },
        setEmailPhotoUrl(state, params) {
            Vue.set(state.emails[params.id], 'url', params.url);
        }
    },
    actions: {
        async loadAllEmails({ commit, dispatch }) {
            const emails = await firebase.collections.remembrances.get();
            emails.forEach((snap) => {
                const email = snap.data();
                email.id = snap.id;
                dispatch('loadEmailPhotoUrl', email);
                commit('addEmail', email);
            });
        },
        async loadEmailPhotoUrl({ commit }, email) {
            const url = await firebase.storage.ref(email.imagePrefix).getDownloadURL();
            commit('setEmailPhotoUrl', {
                id: email.id,
                url
            });
        }
    },
};

export default remembrances;
