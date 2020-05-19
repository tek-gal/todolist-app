import { connect } from 'react-redux';
import Sidebar from '.././components/Sidebar';
import SidebarActions from '.././store/Sidebar/actions';

const mapStateToProps = ({ lists }) => ({
  lists: lists.all,
  current: lists.current,
});
const mapDispatchToProps = {
  addList: SidebarActions.addList,
  selectList: SidebarActions.selectList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
