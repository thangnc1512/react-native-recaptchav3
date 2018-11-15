"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReCaptchaComponent_1 = require("./src/ReCaptchaComponent");
class RecaptchaV3 extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.refreshToken = () => {
            this._captchaRef.refreshToken();
        };
    }
    render() {
        return (React.createElement(ReCaptchaComponent_1.default, { ref: ref => this._captchaRef = ref, captchaDomain: this.props.captchaDomain, siteKey: this.props.siteKey, onReceiveToken: (token) => {
                this.props.onReceiveToken(token);
            } }));
    }
}
exports.default = RecaptchaV3;