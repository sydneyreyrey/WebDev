




function scaleFontSize(parent_node, scaling_factor) {
    for (let i = 0; i < parent_node.children.length; i++) {
        if (parent_node.children[i].tagName == 'P') {
            let pfs = window.getComputedStyle(document.getElementById('textDiv').children[i]).getPropertyValue('font-size')
            document.getElementById('textDiv').children[i].style.fontSize = (parseFloat(pfs) * scaling_factor).toString() +'px';
        }
    }
}

scaleFontSize(document.getElementById('textDiv'), 2)

