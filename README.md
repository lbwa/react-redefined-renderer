<h1 align="center">React redefined renderer</h1>

## What is our purpose?

[Building a custom React renderer](https://www.youtube.com/watch?v=CGpMlWVcHok) based on [react-reconciler].

[react-reconciler]: https://www.npmjs.com/package/react-reconciler

## Vision

众所周知，`React` 的设计哲学，`React` 本身是将 [reconciliation][react-reconciliation] 与 `renderer` 分离。`diff` 与 `render` 相互解耦，互不影响。

那么在实现自定的渲染器后，再结合 [react-reconciler] 这样的[协调算法核心](https://reactjs.org/docs/reconciliation.html#the-diffing-algorithm)来实现高效的视图渲染解决方案，诸如 [React.js][site-react]，[React-Native][site-react-native] 或小程序渲染库等视图解决方案。

[react-reconciliation]: https://reactjs.org/docs/reconciliation.html
[site-react]: https://reactjs.org/
[site-react-native]: https://facebook.github.io/react-native/

## Further readings

- [React.js - reconciliation][react-reconciliation]
- [InfoQ - react conf 2019 custom renderer](https://www.infoq.com/news/2020/01/react-conf-2019-custom-renderer/)
- [React reconciler README](https://www.npmjs.com/package/react-reconciler)
- [medium - hello world custom react renderer](https://medium.com/@agent_hunt/hello-world-custom-react-renderer-9a95b7cd04bc)
