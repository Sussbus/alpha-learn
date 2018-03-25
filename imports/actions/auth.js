import { Tracker } from 'meteor/tracker';

export const USER_LOGGING_IN = 'USER_LOGGING_IN';
export const USER_DATA = 'USER_DATA';

export function loadUser() {
    return dispatch => {
        Tracker.autorun(() => {
            dispatch({
                type: 'USER_LOGGING_IN',
                data: Meteor.loggingIn()
            });
        });

        Tracker.autorun(() => {
            dispatch({
                type: 'USER_DATA',
                data: {
                    user: Meteor.user(),
                    subscription: Meteor.subscription('users')
                }
            });
        });
    };
}

export function logout() {
    return dispatch => {
        Meteor.logout(error => {
            console.log(error);
        });
    };
}
