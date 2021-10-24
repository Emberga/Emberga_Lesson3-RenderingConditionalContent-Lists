const app = Vue.createApp({
    data() {
        return {
            enteredTask: '',
            tasks: [],
            showList: true,
            button: []
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        removeTask(idx) {
            this.tasks.splice(idx, 1);
        },
        toggle() {
            if (this.showList === true) {
                return 'Hide';
            } else if (this.showList === false) {
                return 'Show';

            }

            this.button;

        }
    },
});


app.mount('#assignment');