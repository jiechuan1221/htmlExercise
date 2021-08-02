function show(rr) {
    let dr = document.getElementById("dr")
    let d1 = document.getElementById("d1")
    let rz = document.getElementById("rz")
    let r1 = document.getElementById("r1")
    if (rr === 1) {
        dr.innerHTML = "<div class='dd'>最新</div>"
        d1.innerHTML = "周一"
        rz.firstChild = "<div class='rz'></div>"
        r1.firstChild = "<div class='r1-none'></div>"
        console.log(1)
    }
    else if (rr === 2) {
        dr.innerHTML = "最新"
        d1.innerHTML = "<div class='dd'>周一</div>"
        rz.firstChild = "<div class='rz-none'></div>"
        r1.firstChild = "<div class='r1'></div>"
        console.log(2)
    }
}