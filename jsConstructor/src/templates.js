export function title(block) {
    return `
              <div class="row">
                <div class="col-sm">
                    <h1>${block.value}</h1>
                </div>
            </div>
        `
}


export function text(block) {
    return `
              <div class="row">
        <div class="col-sm"></div>
        <p>
            ${block.value}
        </p>
      </div>
        
        `
}

export function columns(block) {
    const html = block.value.map(item => `<div class="col-sm"><p>${item}</p></div>`)

    console.log(html);
    return `
        <div class="row">
            ${html.join('')}
        </html> 
    `
}

export function image(block) {
    return `
        <div class="row">
            <img class="img" src="${block.value}"> 
        </div>
    `
}
