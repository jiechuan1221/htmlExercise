let i = 0
function show() {
    let all = document.getElementById('all')
    let newP = document.createElement("newP")
    if (document.getElementById('text').value != '') {
        i = i + 1
        newP.innerHTML = "<p id=" + i + ">" + document.getElementById('text').value + " <button onclick=newd(" + i + ")>删除</button></p>"
        document.getElementById('text').value = "快来发送弹幕吧~"
    }
    all.appendChild(newP)
}
function nu() {
    document.getElementById('text').value = ''
}
function newd(i) {
    document.getElementById(i).innerHTML = null
}

