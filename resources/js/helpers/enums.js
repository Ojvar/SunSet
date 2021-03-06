'use strict';

/**
 * Class enums
 */
function Enums() {}
module.exports = Enums;

/**
 * ENUM Commands
 */
Enums.COMMAND = {
    NEW: 1,
    EDIT: 2,
    DELETE: 3,
    SAVE: 4,
    CANCEL: 5
};

/**
 * ENUM Form-Modes
 */
Enums.FORM_MODE = {
    LOADING: 1,
    LIST: 2,
    REGISTER: 3,
    EDIT: 4,
    REMOVE: 5
};