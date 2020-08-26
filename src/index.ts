import { customElement, html } from "lit-element";
import { OpenLitElement } from "./helper/openLitElement";

@customElement("root-el")
export class RootElement extends OpenLitElement {
    render() {
        return html`
            <div class="min-h-screen flex items-center justify-center">
                <h1 class="text-5xl text-purple-600 font-sans">Lilaaa</h1>
            </div>
        `;
    }
}
