var app = new Vue({
    el: '#app',
    data: {
        address: '',
    },
    methods: {
        copyTextArea() {
            this.$refs.text.select();
            document.execCommand('copy');
            alert('Code was copied successfully!!!')
        },
        saveToFile() {
            const data = document.getElementById("disavowTool").value;
            const contentDisavow = document.createElement("a");
            contentDisavow.download = "disavow.txt";
            const textPlain = new Blob([data], {
                type: "text/plain"
            });
            contentDisavow.href = window.URL.createObjectURL(textPlain);
            contentDisavow.click()
        }

    },
    computed: {
        domainlist() {
            var addreses = this.address.split('\n');

            var ret = "";
            for (var addr in addreses) {
                const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/;
                const data = addreses[addr];
                const matches = regex.exec(data);
                if (matches !== null) {
                    ret += addreses[addr] ? 'domain:' + matches[1] + "\n" : "";
                }

            }
            return ret;
        },
        isDisableComputed() {
            return this.address.length <= 0;
        }
    }
})