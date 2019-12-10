import Nav from './nav';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = props => (
    <div style={layoutStyle}>
        <Nav />
        {props.content}
    </div>
);

export default Layout;