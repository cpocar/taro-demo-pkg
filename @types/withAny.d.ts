/**
 * 这个高阶组件中只要用View把WrappedComp包上， taro-demo-app中的Button就会渲染不出来
 * @param WrappedComp
 */
declare const withAny: (WrappedComp: any) => (props: any) => JSX.Element;
export default withAny;
