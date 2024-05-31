// Get the input field
// Execute a function when the user releases a key on the keyboard
const form = document.forms['submit-to-google-sheet'];
form.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        form.submit();
    }
});

function stepSetSinhVien() {
    var masv = $.trim($("input[name='HovaTen']").val());
    if (masv == '') {
        alert("Vui lòng điền họ tên");
        return false;
    }
    var hoten = $.trim($("input[name='phone']").val());
    if (hoten == '') {
        alert("Vui lòng điền số điện thoại");
        return false;
    }
    var hoten = $.trim($("input[name='email']").val());
    if (hoten == '') {
        alert("Vui lòng điền email");
        return false;
    }
    doLoading()
        .then(doSetSinhVien)
        .then(doComplete);
}

function doLoading() {
    return new Promise(function(resolve, reject) {
        resolve();
    });
}

function doSetSinhVien() {
    return new Promise(function(resolve, reject) {
        resolve();
    });
}

function doComplete() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
        }, 2000);
        resolve();
    });
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbz_nnMKBypDGbV4Lvk8tFM_cZvXrZ1KmziPb1RM6eX_l34GySaGbV-BaSPbY615gBiN/exec';

form.addEventListener('submit', e => {
    debugger;
    e.preventDefault();
    showLoadingIndicator();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => showSuccessMessage(response))
        .catch(error => showErrorMessage(error));
})

function showLoadingIndicator() {
}

function showSuccessMessage(response) {
    alert("CẢM ƠN QUÝ KHÁCH. CHÚNG TÔI SẼ LIÊN HỆ SỚM!!!")
    window.location.href = "/";
}

function showErrorMessage(error) {
    console.error('Error!', error.message);
    setTimeout(() => {
        alert("LỖI!!!");
    }, 1000);
}
