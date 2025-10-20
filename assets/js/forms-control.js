formSubmissionControl();

/* ---------------------------------------------------- */
/* 3. Form Submission Controls  */
/* ---------------------------------------------------- */
function formSubmissionControl() {
    const form = document.getElementById('form');
    const formAlertMessage = document.getElementById('form-alert-meassage');

    if (form) {
        form.addEventListener('submit', function (event) {
            // prevent browser's submission which causes a page reload
            event.preventDefault();

            if (!form.checkValidity()) {
                formAlertMessage.textContent = "Please Fill All Required Fields";
                formAlertMessage.className = 'message-area error';
                formAlertMessage.style.display = 'block';
                return;
            }
            const formRequiredData = {
                mobile: document.getElementById('mobile').value,
                location: document.getElementById('location').value,
                service: form.querySelector('input[name="serviceType"]:checked')?.value || 'Service Not Selected',
                details: document.getElementById('description').value,
            };
            console.log("Form Required Data:", formRequiredData);
            form.reset();
            formAlertMessage.textContent = "Thank You! Your Quotation Request Has been Sent. We Will Contact You Shortly.";
            formAlertMessage.className = 'message-area success';
            formAlertMessage.style.display = 'block';

            // Hide the Success Message After awhile
            setTimeout(() => {
                formAlertMessage.style.display = 'none';
            }, 7000);
        });
    }

}
