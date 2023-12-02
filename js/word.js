document.getElementById('bold-text').addEventListener('click', ()=>{
    const textAreaInput = document.getElementById('word-area');
    textAreaInput.style.fontWeight="900";    
})
document.getElementById('italic-text').addEventListener('click', ()=>{
    const textAreaInput = document.getElementById('word-area');
    textAreaInput.style.fontStyle="italic";    
})
document.getElementById('underline-text').addEventListener('click', ()=>{
    const textAreaInput = document.getElementById('word-area');
    textAreaInput.style.textDecoration="underline";    
})
document.getElementById('left-text').addEventListener('click', ()=>{
    const textAreaInput = document.getElementById('word-area');
    textAreaInput.style.textAlign="left";    
})
document.getElementById('center-text').addEventListener('click', ()=>{
    const textAreaInput = document.getElementById('word-area');
    textAreaInput.style.textAlign="center";    
})
document.getElementById('right-text').addEventListener('click', ()=>{
    const textAreaInput = document.getElementById('word-area');
    textAreaInput.style.textAlign="right";    
})
document.getElementById('justify-text').addEventListener('click', ()=>{
    const textAreaInput = document.getElementById('word-area');
    textAreaInput.style.textAlign="justify";    
})

function fontSizeChange(){
    const getFontSizeText = document.getElementById('text-size');
    const getFontSize = parseInt(getFontSizeText.value);
    const textAreaInput = document.getElementById('word-area');
    textAreaInput.style.fontSize = `${getFontSize}px`
    // textAreaInput.style.lineHeight = '1'
}
function textColorChange(){
    const getTextColor = document.getElementById('text-color');
    
    const textAreaInput = document.getElementById('word-area');
    textAreaInput.style.color = getTextColor.value
}


document.getElementById('text-transform').addEventListener('click', ()=>{
    const textAreaInput = document.getElementById('word-area');
    textAreaInput.style.textTransform="capitalize";    
})