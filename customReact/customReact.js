

function customRender(element, container) {
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children
    domElement.setAttribute('href', element.props.href)
    domElement.setAttribute('target', element.props.target)
    container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href: 'http://react.dev',
        target:'_blank'

    },
    children: 'Hello World ! ',
    name: 'vaghesh'
}
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)