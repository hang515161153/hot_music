const Head = React.createClass({
  render: function () {
    return (
      <div className="Head">
        {/*显示logo图片*/}
        <img className='main-logo' src='./images/doctor.png'/>
        {/*显示网站名称*/}
        <span className='wareName'> </span>
        {/*显示功能列表*/}
        <ul className="nav">
          <li>发现音乐</li>
          <li>我的音乐</li>
          <li>下载浪音客户端</li>
        </ul>
        {/*用户搜索歌曲框*/}
        <div className="search">
          <input type="text" className="search_songs" placeholder='歌曲或歌手' />
          <a href=""><img src="./images/search.gif" alt=""/></a>
        </div>

        {/*head右边的登录和个人头像*/}
        <div className="headRight">
          <span className="userImage">
             <img src="./images/user-img.png" alt="用户头像"/>
          </span>
          <span className="logIn">登录</span>
        </div>
      </div>
    );
  }
});
ReactDOM.render(<Head />, document.getElementById('head'));