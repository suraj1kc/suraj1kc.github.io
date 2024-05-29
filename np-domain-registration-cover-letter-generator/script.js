var app = new Vue({
    el: '#app',
    data: {
        name: '',
        email: '',
        address: '',
        isShowing: false,
    },
    methods: {
        currentDate() {
            const current = new Date();
            const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
            return date;
        },
        coverLetter() {
            this.address = this.address;
            this.name = this.name;
            this.email = this.email;
            if (this.name && this.email && this.address !== "") {
                this.isShowing = true;
            }
        },
        async printThis() {
            console.log("printing..");
            const el = this.$refs.printcontent;

            // Temporarily set the background color to white
            const originalBackgroundColor = el.style.backgroundColor;
            el.style.backgroundColor = '#ffffff';

            // Capture the element as a canvas
            const printCanvas = await html2canvas(el, { backgroundColor: null });

            // Convert the canvas to a JPEG data URL
            const jpegDataUrl = printCanvas.toDataURL("image/jpeg", 1.0); // 1.0 is for quality (0 to 1)

            // Reset the background color to its original state
            el.style.backgroundColor = originalBackgroundColor;

            // Create a link element
            const link = document.createElement("a");
            link.setAttribute("download", "cover-letter.jpg"); // Set the download attribute with a .jpg file extension
            link.setAttribute("href", jpegDataUrl);
            link.click(); // Trigger the download

            console.log("done");
        },
    }
});
