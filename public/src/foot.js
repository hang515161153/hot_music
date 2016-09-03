const Foot = React.createClass({
  render:function(){
    return (<div className="footer">

            <div className="span12">
              <p className="text-center">
                <em>Git</em>是一个分布式的版本控制系统，最初由<strong>Linus Torvalds</strong>编写，用作Linux内核代码的管理。在推出后，。
              </p>
              <p className="text-center">
                <em>Git</em>是一个分布式的版本控制系统，最初由<strong>Linus Torvalds</strong>推出后，Git在其它项目中也取得了很大成功，尤其是在Ruby社区中。
              </p>
            </div>
        </div>
    );
  }
});
ReactDOM.render(<Foot />,document.getElementById('Foot'));