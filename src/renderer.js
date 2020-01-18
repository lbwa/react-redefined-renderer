import ReactReconciler from 'react-reconciler'

const reconciler = ReactReconciler({
  // configuration for how to talk to the host env
  // aka 'host config'

  /**
   * README:
   * https://github.com/facebook/react/blob/master/packages/react-reconciler/README.md
   * https://www.npmjs.com/package/react-reconciler#api
   *
   * ReactDOM host config
   * https://github.com/facebook/react/blob/master/packages/react-dom/src/client/ReactDOMHostConfig.js
   */

  // It works by mutating node
  supportsMutation: true,

  // now: () => Date.now(),

  // finalizeInitialChildren(element, type, props) {},

  // getChildHostContext(parentContext, fiberType, rootInstance) {},

  // getRootHostContext(rootInstance) {},

  // resetTextContent(element) {},

  shouldSetTextContent(type, props) {},

  createInstance(
    type, // string
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    const el = document.createElement(type)
    if (props.className) {
      el.className = props.className
    }

    if (props.src) {
      el.src = props.src
    }

    // return any shape of this return value
    return el
  },

  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    return document.createTextNode(text)
  },

  appendChildToContainer(container, child) {
    container.appendChild(child)
  },

  appendChild(parent, child) {
    parent.appendChild(child)
  },

  appendInitialChild(parent, child) {
    parent.appendChild(child)
  },

  removeChildFromContainer(container, child) {},

  removeChild(parent, child) {},

  insertContainerBefore(container, child, before) {},

  insertBefore(parent, child, before) {},

  parentUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    currentHostContext
  ) {
    return newProps
  },

  commitUpdate(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    finishedWork
  ) {
    return newProps
  },

  finalizeInitialChildren() {},

  getChildHostContext() {},

  getPublicInstance() {},

  getRootHostContext() {},

  prepareForCommit() {},

  resetAfterCommit() {}
})

const redefinedRenderer = {
  render(whatToRender, div) {
    const container = reconciler.createContainer(div, false, false)
    reconciler.updateContainer(whatToRender, container, null, null)
  }
}

export default redefinedRenderer
