import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';


class ChaturbateInfo extends PolymerElement {
  static get template() {
    return html `<style>
      :host {
        --cb-info-color: #fff;
        --cb-chat-text-shadow-color: rgba(0, 0, 0, 0.65);
        --cb-default-background-color: rgba(0,0,0,0.5);
      }

      .viewers {
        color: var(--cb-info-color);
        background-color: var(--cb-default-background-color);
        text-shadow: -1px 0 var(--cb-chat-text-shadow-color),
                     0 1px var(--cb-chat-text-shadow-color),
                     1px 0 var(--cb-chat-text-shadow-color),
                     0 -1px var(--cb-chat-text-shadow-color);
        display: inline-table;
        padding: 8px;
        border-radius: 4px;
      }

      .viewers .count {
        font-weight: bold;
      }
    </style>

    <div>
      <span class="viewers">
        <span class="count">{{viewCount}}</span> viewers
      </span>
    </div>`;
  }

  static get properties() {
    return {
      viewCount: {
        type: Number,
        value: 0,
        notify: true
      }
    }
  }
}

customElements.define('chaturbate-info', ChaturbateInfo);
