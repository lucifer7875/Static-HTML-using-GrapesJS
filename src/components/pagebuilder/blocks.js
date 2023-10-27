/* function renderBlock({ model, className }) {
  return `
        ${model.get("icon")}
        <span>
        ${model.get("label")}
        </span>
      `;
}

export const section = {
  tagName: "section",
  draggable: true,
  components: [
    {
      tagName: "span",
      type: "text",
      content: "+"
    }
  ],
  script: function () {
    alert("Hi");
    // `this` is bound to the component element
    console.log("the element", this);
  }
};
export const row = {
  droppable: "[data-gjs-type=column]",
  draggable: true,
  tagName: "section",
  attributes: {
    "data-gjs-type": "row",
    "data-gjs-custom-name": "Row",
    class: "row",
    style: `
      outline: 1px dashed red;
      padding: 4px 0;
      outline-offset: -3px;
      display: flex;
      gap: 30px
    `
  }
};
export const column = {
  ...section,
  draggable: "row, row *",
  attributes: {
    "data-gjs-type": "column",
    "data-gjs-custom-name": "Column",
    class: "column",
    style: `
      flex: 1;
      outline: 1px dashed #ededed;
      padding: 4px 0;
      outline-offset: -3px;
    `
  }
};

export const form = {
  tagName: "form",
  droppable: true,
  draggable: true,
  attributes: {
    "data-type-form": "form",
    "data-gjs-custom-name": "Form",
    style: `
      flex: 1;
      outline: 1px dashed #ededed;
      padding: 4px 0;
      outline-offset: -3px;
    `
  }
};

export const formElement = {
  draggable: true,
  attributes: {
    "data-gjs-type": "form-element",
    "data-gjs-custom-name": "Form element",
    style: `
      flex: 1;
      outline: 1px dashed #ededed;
      padding: 4px 0;
      outline-offset: -3px;
    `
  }
};

const blocks = [
  {
    label: "Text",
    id: "block-text",
    icon: `<svg viewBox="0 0 48 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.0344 29L20.3544 21.88H8.35438L5.71438 29H0.634375L11.6744 0.639998H17.2344L28.2744 29H23.0344ZM14.3544 5.84L10.0344 17.44H18.6744L14.3544 5.84ZM30.2766 23.72C30.2766 22.0667 30.8099 20.7467 31.8766 19.76C32.9699 18.7467 34.3966 18.1067 36.1566 17.84L41.1566 17.08C42.1166 16.9467 42.5966 16.48 42.5966 15.68C42.5966 14.8 42.2899 14.0933 41.6766 13.56C41.0632 13 40.1432 12.72 38.9166 12.72C37.7432 12.72 36.8099 13.0533 36.1166 13.72C35.4232 14.36 35.0232 15.2 34.9166 16.24L30.6766 15.28C30.8632 13.52 31.7032 12.0267 33.1966 10.8C34.6899 9.54667 36.5832 8.92 38.8766 8.92C41.7032 8.92 43.7832 9.6 45.1166 10.96C46.4766 12.32 47.1566 14.0667 47.1566 16.2V25.88C47.1566 27.16 47.2366 28.2 47.3966 29H43.0766C42.9432 28.6 42.8766 27.7733 42.8766 26.52C41.5966 28.5733 39.5966 29.6 36.8766 29.6C34.9032 29.6 33.3032 29.0267 32.0766 27.88C30.8766 26.7067 30.2766 25.32 30.2766 23.72ZM37.7566 25.96C39.1966 25.96 40.3566 25.5733 41.2366 24.8C42.1432 24 42.5966 22.7067 42.5966 20.92V20.04L37.5166 20.8C35.7832 21.0933 34.9166 21.9733 34.9166 23.44C34.9166 24.1333 35.1699 24.7333 35.6766 25.24C36.1832 25.72 36.8766 25.96 37.7566 25.96Z" fill="#9A9797" />
        </svg>`,
    category: "Text",
    attributes: {
      title: "Enter text here"
    },
    content: {
      type: "text",
      attributes: {
        className: "gjs-component"
      },
      components: {
        type: "text",
        content: "Hello World"
      }
    },
    render: renderBlock
  },
  {
    label: "Headline",
    id: "block-headline",
    icon: ` <svg viewBox="0 0 72 77" fill="none"  xmlns="http://www.w3.org/2000/svg">
              <path d="M46.9772 29H42.1372V16.88H28.8172V29H24.0172V0.639998H28.8172V12.36H42.1372V0.639998H46.9772V29Z" fill="#9A9797" />
            </svg>`,
    category: "Text",
    attributes: {},
    content: "<h1>Hello World</h1>",
    render: renderBlock
  },
  {
    label: "Bullet list",
    id: "block-bullet-list",
    icon: ` <svg viewBox="0 0 109 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="5" r="5" fill="#9A9797" />
    <circle cx="5" cy="22" r="5" fill="#9A9797" />
    <circle cx="5" cy="39" r="5" fill="#9A9797" />
    <rect x="23" y="2" width="86" height="7" rx="3.5" fill="#9A9797" />
    <rect x="23" y="19" width="86" height="7" rx="3.5" fill="#9A9797" />
    <rect x="23" y="36" width="86" height="7" rx="3.5" fill="#9A9797" />
  </svg>`,
    category: "Text",
    attributes: {},
    content: {
      attributes: {
        className: "gjs-component"
      },
      tagName: "ul",
      type: "text",
      components: [
        {
          tagName: "li",
          type: "text",
          content: "list item"
        }
      ]
    },
    render: renderBlock
  },

  // Column layouts
  {
    label: "Four columns",
    id: "block-four-columns",
    icon: `<svg viewBox="0 0 64 74" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="74" width="74" height="7" transform="rotate(-90 0 74)" fill="#9A9797" />
    <rect x="19" y="74" width="74" height="7" transform="rotate(-90 19 74)" fill="#9A9797" />
    <rect x="38" y="74" width="74" height="7" transform="rotate(-90 38 74)" fill="#9A9797" />
    <rect x="57" y="74" width="74" height="7" transform="rotate(-90 57 74)" fill="#9A9797" />
  </svg>`,
    category: "Column Layout",
    attributes: {},
    content: {
      ...row,
      components: [{ ...column }, { ...column }, { ...column }, { ...column }]
    },
    render: renderBlock
  },
  {
    label: "Three columns",
    id: "block-three-columns",
    icon: `<svg viewBox="0 0 77 74" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="74" width="74" height="12" transform="rotate(-90 0 74)" fill="#9A9797" />
    <rect x="32" y="74" width="74" height="13" transform="rotate(-90 32 74)" fill="#9A9797" />
    <rect x="65" y="74" width="74" height="12" transform="rotate(-90 65 74)" fill="#9A9797" />
  </svg>`,
    category: "Column Layout",
    attributes: {},
    content: {
      ...row,
      components: [{ ...column }, { ...column }, { ...column }]
    },
    render: renderBlock
  },
  {
    label: "Two columns",
    id: "block-two-columns",
    icon: `<svg width="55" height="74" viewBox="0 0 55 74" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="74" width="74" height="17" transform="rotate(-90 0 74)" fill="#9A9797" />
    <rect x="38" y="74" width="74" height="17" transform="rotate(-90 38 74)" fill="#9A9797" />
  </svg>`,
    category: "Column Layout",
    attributes: {},
    content: {
      ...row,
      components: [{ ...column }, { ...column }]
    },
    render: renderBlock
  },
  {
    label: "One column",
    id: "block-one-column",
    icon: `<svg width="63" height="23" viewBox="0 0 63 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="63" y="23" width="63" height="23" transform="rotate(-180 63 23)" fill="#9A9797" />
  </svg>`,
    category: "Column Layout",
    attributes: {},
    content: {
      ...row,
      components: [{ ...column }]
    },
    render: renderBlock
  },
  {
    label: "Section",
    id: "block-section",
    icon: `<svg width="71" height="43" viewBox="0 0 71 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="57" y="43" width="57" height="33" transform="rotate(-180 57 43)" fill="#9A9797" />
    <rect x="71" y="33" width="57" height="33" transform="rotate(-180 71 33)" fill="#C4C4C4" />
  </svg>`,
    category: "Column Layout",
    content: {
      ...section
    },
    render: renderBlock
  },
  // Form
  {
    label: "Form",
    id: "block-form",
    icon: `<svg viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.5664 3.63281H36.0157C35.2659 1.51864 33.2469 0 30.8789 0H16.3477C13.9797 0 11.9607 1.51864 11.2109 3.63281H6.66016C2.98775 3.63281 0 6.62056 0 10.293V55.3398C0 59.0123 2.98775 62 6.66016 62H40.5664C44.2388 62 47.2266 59.0123 47.2266 55.3398V10.293C47.2266 6.62056 44.2388 3.63281 40.5664 3.63281ZM16.3477 3.63281H30.8789C31.8805 3.63281 32.6953 4.44765 32.6953 5.44922C32.6953 6.45079 31.8805 7.26562 30.8789 7.26562H16.3477C15.3461 7.26562 14.5312 6.45079 14.5312 5.44922C14.5312 4.44765 15.3461 3.63281 16.3477 3.63281ZM29.0625 10.8984V12.7148C29.0625 13.7164 28.2477 14.5312 27.2461 14.5312H19.9805C18.9789 14.5312 18.1641 13.7164 18.1641 12.7148V10.8984H29.0625ZM43.5938 55.3398C43.5938 57.0091 42.2357 58.3672 40.5664 58.3672H6.66016C4.99088 58.3672 3.63281 57.0091 3.63281 55.3398V10.293C3.63281 8.62369 4.99088 7.26562 6.66016 7.26562H11.2109C11.7591 8.81127 12.9856 10.0378 14.5312 10.586V12.7148C14.5312 15.7195 16.9758 18.1641 19.9805 18.1641H27.2461C30.2508 18.1641 32.6953 15.7195 32.6953 12.7148V10.586C34.241 10.0378 35.4675 8.81127 36.0157 7.26562H40.5664C42.2357 7.26562 43.5938 8.62369 43.5938 10.293V55.3398Z" fill="#9A9797" />
    <path d="M12.7148 21.7969H9.08203C8.07889 21.7969 7.26562 22.6101 7.26562 23.6133C7.26562 24.6164 8.07889 25.4297 9.08203 25.4297H12.7148C13.718 25.4297 14.5312 24.6164 14.5312 23.6133C14.5312 22.6101 13.718 21.7969 12.7148 21.7969Z" fill="#9A9797" />
    <path d="M12.7148 29.0625H9.08203C8.07889 29.0625 7.26562 29.8758 7.26562 30.8789C7.26562 31.882 8.07889 32.6953 9.08203 32.6953H12.7148C13.718 32.6953 14.5312 31.882 14.5312 30.8789C14.5312 29.8758 13.718 29.0625 12.7148 29.0625Z" fill="#9A9797" />
    <path d="M12.7148 36.3281H9.08203C8.07889 36.3281 7.26562 37.1414 7.26562 38.1445C7.26562 39.1477 8.07889 39.9609 9.08203 39.9609H12.7148C13.718 39.9609 14.5312 39.1477 14.5312 38.1445C14.5312 37.1414 13.718 36.3281 12.7148 36.3281Z" fill="#9A9797" />
    <path d="M12.7148 43.5938H9.08203C8.07889 43.5938 7.26562 44.407 7.26562 45.4102C7.26562 46.4133 8.07889 47.2266 9.08203 47.2266H12.7148C13.718 47.2266 14.5312 46.4133 14.5312 45.4102C14.5312 44.407 13.718 43.5938 12.7148 43.5938Z" fill="#9A9797" />
    <path d="M38.1445 21.7969H19.9805C18.9773 21.7969 18.1641 22.6101 18.1641 23.6133C18.1641 24.6164 18.9773 25.4297 19.9805 25.4297H38.1445C39.1477 25.4297 39.9609 24.6164 39.9609 23.6133C39.9609 22.6101 39.1477 21.7969 38.1445 21.7969Z" fill="#9A9797" />
    <path d="M19.9805 32.6953H34.5117C35.5149 32.6953 36.3281 31.882 36.3281 30.8789C36.3281 29.8758 35.5149 29.0625 34.5117 29.0625H19.9805C18.9773 29.0625 18.1641 29.8758 18.1641 30.8789C18.1641 31.882 18.9773 32.6953 19.9805 32.6953Z" fill="#9A9797" />
    <path d="M38.1445 36.3281H19.9805C18.9773 36.3281 18.1641 37.1414 18.1641 38.1445C18.1641 39.1477 18.9773 39.9609 19.9805 39.9609H38.1445C39.1477 39.9609 39.9609 39.1477 39.9609 38.1445C39.9609 37.1414 39.1477 36.3281 38.1445 36.3281Z" fill="#9A9797" />
    <path d="M33.9062 45.4102C33.9062 44.407 33.093 43.5938 32.0898 43.5938H19.9805C18.9773 43.5938 18.1641 44.407 18.1641 45.4102C18.1641 46.4133 18.9773 47.2266 19.9805 47.2266H32.0898C33.093 47.2266 33.9062 46.4133 33.9062 45.4102Z" fill="#9A9797" />
    <path d="M38.1445 50.8594H30.8789C29.8758 50.8594 29.0625 51.6726 29.0625 52.6758C29.0625 53.6789 29.8758 54.4922 30.8789 54.4922H38.1445C39.1477 54.4922 39.9609 53.6789 39.9609 52.6758C39.9609 51.6726 39.1477 50.8594 38.1445 50.8594Z" fill="#9A9797" />
    <path d="M56.5508 5.08594C53.5461 5.08594 51.1016 7.53046 51.1016 10.5352V50.4961C51.1016 50.7139 51.1407 50.93 51.2172 51.1339L54.85 60.8214C55.1158 61.5304 55.7936 62 56.5508 62C57.308 62 57.9857 61.5304 58.2515 60.8214L61.8844 51.1339C61.9609 50.93 62 50.7139 62 50.4961V10.5352C62 7.53046 59.5555 5.08594 56.5508 5.08594ZM56.5508 55.0105L55.539 52.3125H57.5625L56.5508 55.0105ZM58.3672 48.6797H54.7344V20.8281H58.3672V48.6797ZM58.3672 17.1953H54.7344V10.5352C54.7344 9.53359 55.5492 8.71875 56.5508 8.71875C57.5523 8.71875 58.3672 9.53359 58.3672 10.5352V17.1953Z" fill="#9A9797" />
  </svg>`,
    category: "Form",
    droppable: true,
    content: {
      ...form
    },
    render: renderBlock
  },
  {
    label: "Checkbox",
    id: "block-form-checkbox",
    draggable: "form, form *",
    icon: `<svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.6111 19.7222L9.72222 23.6111L22.2222 36.1111L50 8.33333L46.1111 4.44444L22.2222 28.3333L13.6111 19.7222ZM44.4444 44.4444H5.55556V5.55556H33.3333V0H5.55556C2.5 0 0 2.5 0 5.55556V44.4444C0 47.5 2.5 50 5.55556 50H44.4444C47.5 50 50 47.5 50 44.4444V22.2222H44.4444V44.4444Z" fill="#9A9797" />
  </svg>`,
    category: "Form",
    content: {
      ...formElement,
      tagName: "label",
      components: [
        {
          tagName: "input",
          attributes: {
            type: "checkbox"
          }
        },
        {
          tagName: "span",
          content: "A Checkbox"
        }
      ]
    },
    render: renderBlock
  },
  {
    label: "Order Form",
    id: "block-order-form",
    icon: `<svg viewBox="0 0 41 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.5766 1.89758C33.1114 1.09335 32.2454 0.59375 31.317 0.59375H21.6133V12.0719H39.4612L33.5766 1.89758Z" fill="#9A9797" />
    <path d="M18.8932 0.59375H9.09792C8.16761 0.59375 7.30174 1.09426 6.83658 1.9003L0.973633 12.0719H18.8931V0.59375H18.8932Z" fill="#9A9797" />
    <path d="M0 14.793V43.8035C0 45.5671 1.43535 47.0015 3.1989 47.0015H37.2155C38.9791 47.0015 40.4144 45.5671 40.4144 43.8035V14.793H0ZM26.3811 26.9929L19.3467 34.0273C19.081 34.2929 18.7328 34.4263 18.3847 34.4263C18.0365 34.4263 17.6883 34.2929 17.4235 34.0273L14.1258 30.7304C13.5954 30.2 13.5954 29.3385 14.1258 28.8072C14.6571 28.2759 15.5186 28.2759 16.0499 28.8072L18.3847 31.143L24.458 25.0697C24.9893 24.5384 25.8507 24.5384 26.3811 25.0697C26.9125 25.6011 26.9125 26.4616 26.3811 26.9929Z" fill="#9A9797" />
  </svg>`,
    category: "Form",
    attributes: {},
    content: {
      attributes: {
        className: "gjs-component"
      },
      tagName: "section",
      type: "text",
      content: "This is a section component"
    },
    render: renderBlock
  },
  {
    label: "Payment Method",
    id: "block-payment-method",
    icon: ` <svg viewBox="0 0 61 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 15.8026V31.5894C0 36.1355 3.68529 39.8208 8.23141 39.8208H52.7686C57.3147 39.8208 61 36.1355 61 31.5894V15.8026C61 15.0121 60.359 14.3711 59.5685 14.3711H1.43155C0.640976 14.3711 0 15.0121 0 15.8026ZM15.2301 25.8235H11.4127C10.0291 25.8235 8.90746 24.7019 8.90746 23.3183C8.90746 21.9347 10.0291 20.8131 11.4127 20.8131H15.2301C16.6137 20.8131 17.7353 21.9347 17.7353 23.3183C17.7353 24.7019 16.6137 25.8235 15.2301 25.8235Z" fill="#9A9797" />
    <path d="M61 8.74832V8.23141C61 3.68529 57.3147 0 52.7686 0H8.23141C3.68529 0 0 3.68529 0 8.23141V8.74832C0 9.53889 0.640976 10.1799 1.43155 10.1799H59.5685C60.359 10.1799 61 9.53889 61 8.74832Z" fill="#9A9797" />
  </svg>`,
    category: "Form",
    attributes: {},
    content: {
      attributes: {
        className: "gjs-component"
      },
      tagName: "section",
      type: "text",
      content: "This is a section component"
    },
    render: renderBlock
  },
  {
    label: "Coupon",
    id: "block-coupon",
    icon: `<svg viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6339 21.6484C11.6833 21.6484 10.8809 22.6955 10.8809 23.9336C10.8809 25.1727 11.6832 26.2198 12.6339 26.2198C13.5846 26.2198 14.3879 25.1727 14.3879 23.9336C14.3879 22.6955 13.5846 21.6484 12.6339 21.6484Z" fill="#9A9797" />
    <path d="M28.007 33.7305C27.0564 33.7305 26.2539 34.7776 26.2539 36.0166C26.2539 37.2547 27.0562 38.3018 28.007 38.3018C28.9576 38.3018 29.7611 37.2547 29.7611 36.0166C29.7611 34.7776 28.9576 33.7305 28.007 33.7305Z" fill="#9A9797" />
    <path d="M37.9692 15.2176C22.5233 1.00517 23.3134 1.54803 22.0854 1.07099C20.3402 0.378737 18.2637 0.740706 16.8293 2.06021L2.53002 15.2176C0.922187 16.6964 0 18.8008 0 20.9925V44.2919C0 47.0372 2.22229 49.2715 4.9533 49.2715H35.5448C38.276 49.2715 40.4981 47.0372 40.4981 44.2919V20.9925C40.4982 18.8008 39.576 16.6964 37.9692 15.2176ZM18.7754 10.2228C18.8677 9.33736 19.6798 8.70859 20.5883 8.87911C21.4573 9.0603 21.9467 9.89413 21.7847 10.6707C21.6126 11.498 20.8343 12.025 19.9932 11.8671C19.1898 11.6995 18.6995 10.9697 18.7754 10.2228ZM7.83372 23.9317C7.83372 20.9915 9.98694 18.5997 12.6338 18.5997C15.2816 18.5997 17.4347 20.9915 17.4347 23.9317C17.4347 26.8719 15.2815 29.2647 12.6338 29.2647C9.98694 29.2647 7.83372 26.8719 7.83372 23.9317ZM16.5674 40.1472C15.4908 40.1472 14.7395 39.0434 15.1638 38.0336L22.5801 20.3577C22.9061 19.5818 23.7988 19.2161 24.5748 19.5422C25.3507 19.8672 25.7153 20.7609 25.3903 21.5368L17.973 39.2128C17.7282 39.7958 17.1636 40.1472 16.5674 40.1472ZM28.0067 41.3497C25.3598 41.3497 23.2067 38.9579 23.2067 36.0176C23.2067 33.0774 25.36 30.6846 28.0067 30.6846C30.6535 30.6846 32.8076 33.0774 32.8076 36.0176C32.8076 38.9579 30.6535 41.3497 28.0067 41.3497Z" fill="#9A9797" />
    <path d="M51.6176 31.9477C46.6572 17.5081 43.9022 9.4798 43.8631 9.38859C43.0008 7.39188 41.3249 5.83898 39.2673 5.12906C39.1491 5.08895 39.8459 5.25815 28.7969 2.63672L40.031 12.9738C42.2644 15.0273 43.5452 17.9493 43.5452 20.9911V40.7348L49.0257 38.3888C51.5048 37.3163 52.6576 34.437 51.6176 31.9477Z" fill="#9A9797" />
  </svg>`,
    category: "Form",
    attributes: {},
    content: {
      attributes: {
        className: "gjs-component"
      },
      tagName: "section",
      type: "text",
      content: "This is a coupon component"
    },
    render: renderBlock
  },
  {
    label: "Order Bump",
    id: "block-order-bump",
    icon: `<svg viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M43.9172 44.9417C44.4069 44.938 44.9484 44.7719 45.4564 44.2511C45.9808 43.6671 45.9999 42.994 46.0002 42.834V2.12255C46.0002 0.950327 45.0486 0 43.8748 0H17.3193C17.8587 0.532234 18.2574 1.17061 18.4945 1.86911H20.062C21.1804 1.86911 22.0993 2.73639 22.1827 3.83348H27.4055C29.29 3.83348 30.8232 5.36422 30.8232 7.24564V44.9567C30.8233 44.9566 39.5876 44.9467 43.9172 44.9417Z" fill="#9A9797" />
    <path d="M15.7944 3.37575C15.7743 2.37806 14.9401 1.56641 13.9348 1.56641C12.9296 1.56641 12.0953 2.37806 12.0753 3.37566C12.059 4.18039 11.4027 4.82425 10.5987 4.82425H8.63381C8.63399 5.15408 8.63372 6.12311 8.63381 6.44135H19.2359C19.2364 6.00699 19.2344 5.24216 19.2359 4.82425H17.271C16.467 4.82425 15.8107 4.18039 15.7944 3.37575Z" fill="#9A9797" />
    <path d="M27.4054 6.78906H22.1894V7.09877C22.1894 8.36698 21.157 9.39864 19.8881 9.39864H7.98135C6.71242 9.39864 5.68003 8.36689 5.68003 7.09877V6.78906H0.464019C0.208148 6.78906 0 6.99335 0 7.24445V45.5423C0 45.7934 0.208148 45.9977 0.464019 45.9977H27.4054C27.6613 45.9977 27.8695 45.7934 27.8695 45.5423V7.24445C27.8694 6.99335 27.6612 6.78906 27.4054 6.78906ZM3.24813 15.4327C3.79915 14.8237 4.73941 14.7767 5.3484 15.3277L6.07988 15.9895L8.8089 12.8728C9.34986 12.2548 10.2893 12.1927 10.9072 12.7337C11.5251 13.2746 11.5874 14.2141 11.0463 14.832L7.32167 19.0858C6.73983 19.7683 5.69621 19.6683 5.20532 19.2089L3.35311 17.533C2.74421 16.982 2.69721 16.0417 3.24813 15.4327ZM23.502 42.6551H4.22866C3.40748 42.6551 2.74169 41.9894 2.74169 41.1682C2.74169 40.3469 3.40739 39.6812 4.22866 39.6812H23.502C24.3232 39.6812 24.989 40.3469 24.989 41.1682C24.989 41.9894 24.3233 42.6551 23.502 42.6551ZM3.24813 32.4789C3.79915 31.87 4.73941 31.8229 5.3484 32.3739L6.07988 33.0358L8.8089 29.919C9.34986 29.301 10.2893 29.2389 10.9072 29.7799C11.5251 30.3208 11.5874 31.2603 11.0463 31.8781L7.32167 36.1319C6.73983 36.8145 5.69621 36.7144 5.20532 36.255L3.35311 34.5793C2.74421 34.0281 2.69721 33.0879 3.24813 32.4789ZM23.502 36.5755H15.1421C14.3209 36.5755 13.6551 35.9098 13.6551 35.0886C13.6551 34.2674 14.3209 33.6016 15.1421 33.6016H23.502C24.3232 33.6016 24.989 34.2674 24.989 35.0886C24.989 35.9098 24.3233 36.5755 23.502 36.5755ZM23.502 25.7029H4.22866C3.40748 25.7029 2.74169 25.0372 2.74169 24.2159C2.74169 23.3947 3.40739 22.7289 4.22866 22.7289H23.502C24.3232 22.7289 24.989 23.3947 24.989 24.2159C24.989 25.0372 24.3233 25.7029 23.502 25.7029ZM23.502 19.5351H15.1421C14.3209 19.5351 13.6551 18.8694 13.6551 18.0481C13.6551 17.2269 14.3209 16.5611 15.1421 16.5611H23.502C24.3232 16.5611 24.989 17.2269 24.989 18.0481C24.989 18.8693 24.3233 19.5351 23.502 19.5351Z" fill="#9A9797" />
  </svg>`,
    category: "Form",
    attributes: {},
    content: {
      attributes: {
        className: "gjs-component"
      },
      tagName: "section",
      type: "text",
      content: "This is a order bump component"
    },
    render: renderBlock
  },
  {
    label: "Image",
    id: "block-image",
    icon: `<svg viewBox="0 0 53 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M46.2276 0H6.77252C3.03829 0 0 3.03809 0 6.77252V38.8591L11.3809 29.4072C12.9136 28.1096 15.1451 28.0981 16.691 29.3818L22.0314 33.8164L36.3173 19.5085C37.1432 18.6815 38.2873 18.2419 39.4533 18.3013C40.6116 18.3607 41.6959 18.9075 42.4324 19.8024L52.9999 32.0259V6.77252C53.0001 3.03809 49.9618 0 46.2276 0ZM16.6841 21.5749C12.5336 21.5749 9.15701 18.1983 9.15701 14.0479C9.15701 9.89756 12.5338 6.52098 16.6841 6.52098C20.8345 6.52098 24.211 9.89767 24.211 14.0479C24.211 18.1983 20.8345 21.5749 16.6841 21.5749Z" fill="#9A9797" />
  </svg>`,
    category: "Media",
    attributes: {},
    content: {
      type: "image",
      activate: true,
      attributes: {
        style: `display: inline-block; width: auto`
      }
    },
    render: renderBlock
  },
  {
    label: "Video",
    id: "block-video",
    icon: `<svg viewBox="0 0 53 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M45.99 6.77438L39.749 9.65637C39.749 9.65637 38.679 9.65637 37.345 9.65637C37.106 9.65637 36.88 9.79038 36.66 9.98338V6.46338C36.66 3.36738 34.149 0.859375 31.056 0.859375H5.602C2.507 0.859375 0 3.36838 0 6.46338V26.7994C0 29.8954 2.507 32.4034 5.602 32.4034H6.354H16.014H27.155V29.4204C27.155 27.9534 28.348 26.7604 29.814 26.7604H30.86V25.7164C30.86 24.2494 32.054 23.0554 33.52 23.0554H36.675C37.358 23.0554 37.974 23.3224 38.446 23.7444H39.749C39.749 23.7444 42.541 24.9854 45.99 26.5164C49.443 28.0454 52.234 23.6024 52.234 16.5924C52.234 9.57438 49.444 5.17238 45.99 6.77438Z" fill="#9A9797" />
    <path d="M36.6826 24.6172H33.5286C32.9226 24.6172 32.4296 25.1092 32.4296 25.7162V28.3222H29.8226C29.2166 28.3222 28.7246 28.8142 28.7246 29.4202V32.5762C28.7246 33.1822 29.2156 33.6742 29.8226 33.6742H32.4296V36.2812C32.4296 36.8862 32.9216 37.3792 33.5286 37.3792H36.6826C37.2886 37.3792 37.7806 36.8872 37.7806 36.2812V33.6742H40.3886C40.9946 33.6742 41.4856 33.1832 41.4856 32.5762V29.4202C41.4856 28.8152 40.9956 28.3222 40.3886 28.3222H37.7806V25.7162C37.7806 25.1072 37.2896 24.6172 36.6826 24.6172Z" fill="#9A9797" />
  </svg>`,
    category: "Media",
    attributes: {},
    content: {
      type: "video",
      activate: true,
      attributes: {
        style: `display: inline-block;width: 100%;`
      }
    },
    render: renderBlock
  },
  {
    label: "Audio",
    id: "block-audio",
    icon: `<svg viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.855 30.9219C0.831 30.9219 0 31.7529 0 32.7759V45.1449C0 46.1689 0.831 46.9989 1.855 46.9989C2.879 46.9989 3.71 46.1679 3.71 45.1449V32.7759C3.711 31.7519 2.88 30.9219 1.855 30.9219Z" fill="#9A9797" />
    <path d="M7.26809 18.5547C6.24409 18.5547 5.41309 19.3847 5.41309 20.4097V45.1457C5.41309 46.1717 6.24409 47.0017 7.26809 47.0017C8.29209 47.0017 9.12309 46.1707 9.12309 45.1467V20.4097C9.12309 19.3847 8.29209 18.5547 7.26809 18.5547Z" fill="#9A9797" />
    <path d="M12.6792 24.7344C11.6552 24.7344 10.8242 25.5664 10.8242 26.5894V45.1424C10.8242 46.1664 11.6552 46.9964 12.6792 46.9964C13.7032 46.9964 14.5342 46.1654 14.5342 45.1424V26.5904C14.5342 25.5644 13.7032 24.7344 12.6792 24.7344Z" fill="#9A9797" />
    <path d="M18.0913 12.3672C17.0683 12.3672 16.2373 13.1972 16.2373 14.2222V45.1422C16.2373 46.1672 17.0683 46.9972 18.0913 46.9972C19.1153 46.9972 19.9463 46.1662 19.9463 45.1422V14.2222C19.9463 13.1972 19.1153 12.3672 18.0913 12.3672Z" fill="#9A9797" />
    <path d="M23.5044 0C22.4804 0 21.6494 0.831 21.6494 1.855V45.145C21.6494 46.169 22.4804 46.999 23.5044 46.999C24.5274 46.999 25.3594 46.168 25.3594 45.145V1.855C25.3594 0.831 24.5274 0 23.5044 0Z" fill="#9A9797" />
    <path d="M39.7339 24.7344C38.7109 24.7344 37.8799 25.5664 37.8799 26.5894V45.1424C37.8799 46.1664 38.7109 46.9964 39.7339 46.9964C40.7569 46.9964 41.5879 46.1654 41.5879 45.1424V26.5904C41.5899 25.5644 40.7589 24.7344 39.7339 24.7344Z" fill="#9A9797" />
    <path d="M45.145 12.3672C44.122 12.3672 43.291 13.1972 43.291 14.2222V45.1422C43.291 46.1672 44.122 46.9972 45.145 46.9972C46.169 46.9982 47 46.1672 47 45.1432V14.2232C47 13.1972 46.169 12.3672 45.145 12.3672Z" fill="#9A9797" />
    <path d="M28.9145 18.5547C27.8905 18.5547 27.0605 19.3847 27.0605 20.4097V45.1457C27.0605 46.1707 27.8905 47.0007 28.9145 47.0007C29.9385 47.0007 30.7685 46.1697 30.7685 45.1457V20.4097C30.7705 19.3847 29.9385 18.5547 28.9145 18.5547Z" fill="#9A9797" />
    <path d="M34.3267 37.1055C33.3027 37.1055 32.4727 37.9355 32.4727 38.9595V45.1445C32.4727 46.1685 33.3027 46.9985 34.3267 46.9985C35.3507 46.9985 36.1807 46.1675 36.1807 45.1445V38.9605C36.1837 37.9365 35.3517 37.1055 34.3267 37.1055Z" fill="#9A9797" />
  </svg>`,
    category: "Media",
    content: {
      type: "audio",
      activate: true,
      attributes: {
        style: `display: inline-block;width: 100%;`
      }
    },
    render: renderBlock
  },
  {
    label: "Carousel",
    id: "block-carousel",
    icon: `<svg viewBox="0 0 60 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50.1388 17.8674C50.1307 17.8582 50.123 17.8489 50.1153 17.8393C49.9273 17.6079 49.6848 17.5623 49.557 17.5557C49.4293 17.549 49.1833 17.5698 48.9728 17.7807L37.3216 29.4498C36.8872 29.8848 36.1931 29.917 35.7203 29.5244L30.8167 25.4526C30.5281 25.2129 30.1113 25.2155 29.8259 25.4585C29.8223 25.4616 29.8187 25.4646 29.815 25.4676L19.6191 33.9353V36.4574C19.6191 39.3026 21.9339 41.6174 24.7792 41.6174H54.8401C57.6854 41.6174 60.0001 39.3026 60.0001 36.4574V29.2742L50.1388 17.8674Z" fill="#C4C4C4" />
    <path d="M30.5196 22.3908C30.5116 22.3816 30.5038 22.3723 30.4961 22.3628C30.3082 22.1314 30.0656 22.0858 29.9379 22.0792C29.8101 22.0724 29.5642 22.0932 29.3536 22.3041L17.7025 33.9733C17.2681 34.4082 16.574 34.4405 16.1011 34.0479L11.1975 29.976C10.909 29.7363 10.4922 29.7389 10.2068 29.9819C10.2032 29.985 10.1996 29.988 10.1958 29.9911L0 38.4587V40.9808C0 43.8261 2.31473 46.1408 5.16002 46.1408H35.2209C38.0662 46.1408 40.381 43.826 40.381 40.9808V33.7976L30.5196 22.3908Z" fill="#9A9797" />
    <path d="M12.5 12C10.5701 12 9 13.5701 9 15.5C9 17.4299 10.5702 19 12.5 19C14.43 19 16 17.4299 16 15.5C16 13.57 14.43 12 12.5 12Z" fill="#9A9797" />
    <path d="M54.8402 0.476562H24.7792C21.934 0.476562 19.6191 2.7913 19.6191 5.63658V30.0835L28.2903 22.882C29.4581 21.8934 31.1583 21.8847 32.3361 22.8627L36.405 26.2415L47.2895 15.3402C47.9188 14.7101 48.7904 14.3751 49.6788 14.4204C50.5613 14.4657 51.3874 14.8823 51.9486 15.5641L60 24.8773V5.63658C60.0002 2.7913 57.6853 0.476562 54.8402 0.476562ZM32.3308 16.9146C29.1685 16.9146 26.5959 14.3419 26.5959 11.1797C26.5959 8.01756 29.1687 5.44493 32.3308 5.44493C35.4931 5.44493 38.0656 8.01764 38.0656 11.1797C38.0656 14.3419 35.4931 16.9146 32.3308 16.9146Z" fill="#C4C4C4" />
    <path d="M35.221 5H5.16002C2.31489 5 0 7.31473 0 10.16V34.6069L8.6712 27.4055C9.83893 26.4169 11.5391 26.4081 12.7169 27.3862L16.7858 30.7649L27.6703 19.8636C28.2996 19.2335 29.1713 18.8986 30.0597 18.9438C30.9422 18.9891 31.7683 19.4057 32.3294 20.0875L40.3809 29.4007V10.16C40.381 7.31473 38.0661 5 35.221 5ZM12.7117 21.438C9.5494 21.438 6.97677 18.8654 6.97677 15.7032C6.97677 12.541 9.54956 9.96837 12.7117 9.96837C15.8739 9.96837 18.4465 12.5411 18.4465 15.7032C18.4465 18.8654 15.8739 21.438 12.7117 21.438Z" fill="#9A9797" />
  </svg>`,
    category: "Media",
    render: renderBlock
  },

  //Others
  {
    label: "Menu",
    id: "block-menu",
    icon: `<svg viewBox="0 0 70 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="70" height="7" rx="3.5" fill="#9A9797" />
    <rect y="17" width="70" height="7" rx="3.5" fill="#9A9797" />
    <rect y="34" width="70" height="7" rx="3.5" fill="#9A9797" />
  </svg>`,
    category: "Others",
    render: renderBlock
  },
  {
    label: "Countdown",
    id: "block-countdown",
    icon: `<svg viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.6808 28.1285C40.6808 26.1615 39.0864 24.5793 37.1194 24.5793H31.2171V13.9012C31.2171 11.9342 29.597 10.3398 27.63 10.3398C25.663 10.3398 24.043 11.9342 24.043 13.9012V28.1469C24.043 30.1139 25.6532 31.6789 27.6203 31.6789H37.1169C39.0864 31.6777 40.6808 30.0955 40.6808 28.1285Z" fill="#9A9797" />
    <path d="M27.6128 0C12.3861 0 0 12.3873 0 27.6116C0 33.5419 1.8815 39.0398 5.07515 43.5444L2.21626 46.3691C1.74344 46.8358 1.59805 47.542 1.84851 48.1577C2.10019 48.7735 2.69763 49.1767 3.36348 49.1791L13.6531 49.2219C14.8553 49.2256 15.8363 48.2579 15.8473 47.0582L15.9402 36.7686C15.9463 36.1027 15.5504 35.4992 14.9383 35.2414C14.3262 34.9812 13.6164 35.1156 13.1448 35.5835L10.2493 38.4412C8.27492 35.2976 7.12281 31.5908 7.12281 27.6116C7.12281 16.314 16.314 7.12158 27.6128 7.12158C38.9103 7.12158 48.1015 16.3128 48.1015 27.6116C48.1015 36.2237 42.7564 43.5872 35.2108 46.6037C33.6067 47.2451 32.6843 48.9421 33.0203 50.6379C33.2255 51.6715 33.8816 52.5597 34.8077 53.0631C35.735 53.564 36.8382 53.6312 37.8168 53.2402C48.0038 49.1767 55.2256 39.2316 55.2256 27.6116C55.2243 12.3873 42.837 0 27.6128 0Z" fill="#9A9797" />
  </svg>`,
    category: "Others",
    render: renderBlock
  },
  {
    label: "Line",
    droppable: false,
    draggable: true,
    id: "block-line",
    icon: `<svg viewBox="0 0 70 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="70" height="7" fill="#9A9797" />
  </svg>`,
    category: "Others",
    content: {
      tagName: "hr",
      void: true
    },
    render: renderBlock
  }
];
 */
