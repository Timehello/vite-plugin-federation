import {h} from "vue";

const button = {
    name: "btn-component",
    render() {
        return h(
            "button",
            {
                id: "btn-remote",
                style: {
                    'background-color': 'red',
                    'border': 'none',
                    'color': 'white',
                    'padding': '15px 32px',
                    'text-align': 'center',
                    'text-decoration': 'none',
                    'display': 'inline-block',
                    'font-size': '16px'
                },
                onClick: () => {
                    this.$store.state.cartItems++
                }
            },
            "Hello Remote Button"
        );
    },
};

export default button;
