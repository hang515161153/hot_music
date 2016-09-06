const Foot = React.createClass({
  render: function () {
    return (
      <div className="footer">
        <div className="foot_left">
          <div className="logo_img">logooooooooooooo</div>
          <div className="foot_content">Copyright © 2015 浪之音 All rights reserved.</div>
        </div>
        <div className="foot_right">
          <div className="foot_title">关注我们</div>
          <ul className="foot_right_ul">
            <li>新浪微博: <a href="">@麻爷豆腐乳</a> </li>
            <li>交流 QQ: 515161153</li>
            <li>官方微信: hang515161153</li>
          </ul>
        </div>
      </div>
    );
  }
});
ReactDOM.render(<Foot />, document.getElementById('Foot'));