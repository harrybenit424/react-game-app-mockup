import React from 'react'

class UserSettings extends React.Component {
    openCity = (evt, cityName) => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    state = {
        social_connections: [{
            icon: 'fa fa-steam',
            label: 'steam',
            check_img: process.env.PUBLIC_URL + 'assets/images/tick.png',
            username: 'user name'
        },{
            icon: 'fa fa-twitch',
            label: 'twitch',
            check_img: process.env.PUBLIC_URL + 'assets/images/tick.png',
            username: 'user name'
        },{
            icon: 'fa fa-twitter',
            label: 'twitter',
            check_img: process.env.PUBLIC_URL + 'assets/images/tick.png',
            username: 'user name'
        },{
            icon: 'fa fa-facebook',
            label: 'facebook',
            check_img: process.env.PUBLIC_URL + 'assets/images/tick.png',
            username: 'user name'
        },{
            icon: 'fa fa-slideshare',
            label: 'steam',
            check_img: process.env.PUBLIC_URL + 'assets/images/tick.png',
            username: 'user name'
        },{
            icon: 'fa fa-youtube-play',
            label: 'youtube',
            check_img: process.env.PUBLIC_URL + 'assets/images/tick.png',
            username: 'user name'
        },],
        user: {
            img: process.env.PUBLIC_URL + 'assets/images/user-img.png',
            name: 'user Name',
            type: 'account type'
        },
        select_stream_service: [{
            service: 'twitch'
        }, {
            service: 'Facebook gaming',
        }, {
            service: 'Youtube gaming',
        },{
            service: 'Mixer'
        }],
        service_url: 'state url'
    }

    onChangeInputUrl = (event) => {
        this.setState({
            service_url: event.target.value
        })
    }

    render() {
        // document.getElementById("defaultOpen").click();
        return (
            <div>
                <div className="container-fluid user-settings-container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="tab">
                                <button className="tablinks active" onClick={e => this.openCity(e, 'settings')}
                                        id="defaultOpen">settings
                                </button>
                                <button className="tablinks" onClick={e => this.openCity(e, 'giveaways')}>giveaways
                                </button>
                                <button className="tablinks" onClick={e => this.openCity(e, 'partner')}>become partner
                                </button>
                            </div>
                            {/*settings tab*/}
                            <div id="settings" className="tabcontent">
                                <h1>User settings</h1>
                                <div className="user-box">
                                    <div className="flout-left">
                                        <img src={this.state.user.img} className="img-but img-responsive"/>
                                        <div>
                    <span className="own-btn upload-but avter-but btn-file">
                      UPLOAD NEW AVATAR <input type="file"/>
                    </span>
                                        </div>
                                    </div>
                                    <div className="flout-left">
                                        <div className="user-side-text">
                                            <h2>{this.state.user.name}</h2>
                                            <h3>{this.state.user.type}</h3>
                                            <h4>premium</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"/>
                                <h2>Change EMAIL</h2>
                                <hr/>
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label className="col-sm-2 col-md-3 col-lg-2 control-label">new email</label>
                                        <div className="col-sm-10 col-md-9 col-lg-10">
                                            <input type="name" className="form-control form-own"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                    <h2>Change password</h2>
                                    <hr/>
                                    <div className="form-group">
                                        <label className="col-sm-5 col-md-4 col-lg-3 control-label">current
                                            password</label>
                                        <div className="col-sm-7 col-md-8 col-lg-9">
                                            <input type="name" className="form-control form-own"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-5 col-md-4 col-lg-3 control-label">new password</label>
                                        <div className="col-sm-7 col-md-8 col-lg-9">
                                            <input type="name" className="form-control form-own"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-5 col-md-4 col-lg-3 control-label">confirm new
                                            password</label>
                                        <div className="col-sm-7 col-md-8 col-lg-9">
                                            <input type="name" className="form-control form-own"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-offset-3 col-md-offset-5 col-sm-7">
                                            <button type="submit"
                                                    className="own-btn btn btn-blue btn-primary uppercase">SUBMIT
                                            </button>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                    <h2>socials connections</h2>
                                    <hr/>
                                    <div className="user-but-list">
                                        <ul>
                                            {this.state.social_connections.map((connection, index) => {
                                                return (
                                                    <li key={index}>
                                                        <button className="own-btn btn btn-blue btn-primary uppercase">
                                                            <span><i className={connection.icon} aria-hidden="true"/></span>
                                                            {connection.label}
                                                        </button>
                                                        <span> <span><img
                                                            src={connection.check_img}
                                                            className="img-responsive"/></span> {connection.username}</span>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className="clearfix"/>
                                    <h2>Select Streaming Service</h2>
                                    <hr/>
                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>Select list (select one):</label>
                                            <select className="form-control form-own full-w" name="streem-services">
                                                {this.state.select_stream_service.map((service, index) => {
                                                    return (
                                                        <option key={index} value={index}> {service.service} </option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6">
                                        <div className="form-group">
                                            <label>URL :</label>
                                            <div className="input">
                                                <input value={this.state.service_url} onChange = {this.onChangeInputUrl}
                                                className="selectedtext form-control form-own full-w" type="text"
                                                placeholder="https://www.twitch.tv/esl_csgo"/></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/*giveways tab*/}
                            <div id="giveaways" className="tabcontent">
                                <h1>giveaways</h1>
                                <div className="user-box">
                                    <h2>Create Giveaway</h2>
                                    <hr/>
                                    <div>
                  <span className="own-btn upload-but btn-file">
                    upload featured image <input type="file"/>
                  </span> <span className="sm-text">450 x 300</span>
                                    </div>
                                </div>
                                <div className="clearfix"/>
                                <br/>
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label className="col-sm-12 col-md-3 col-lg-2 control-label">Description</label>
                                        <div className="col-sm-12 col-md-9 col-lg-10">
                                            <textarea className="form-control form-own2 full-text-area" rows={3}
                                                      id="comment" defaultValue={""}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-4 col-md-3 col-lg-2 control-label">End Date</label>
                                        <div className="col-sm-8 col-md-9 col-lg-10">
                                            <input type="date" className="form-control date-input"/>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                    <h1>Entry Options</h1>
                                    <br/>
                                    <div className="col-md-6">
                                        <div className="Entry-list">
                                            <ul>
                                                <li>
                                                    <div className="discord-bg entry-listing color-white">
                                                        <div className="Entry-list-icon"><i className="fa fa-slideshare"
                                                                                            aria-hidden="true"/></div>
                                                        <div className="toggle-lable">
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked/>
                                                                <span className="slider round"/>
                                                            </label>
                                                        </div>
                                                        <div className="title-entry">join discord</div>
                                                        <div className="entry-link"><a href="#">EDIT</a></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="twitch-bg entry-listing color-white">
                                                        <div className="Entry-list-icon"><i className="fa fa-twitch"
                                                                                            aria-hidden="true"/></div>
                                                        <div className="toggle-lable">
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked/>
                                                                <span className="slider round"/>
                                                            </label>
                                                        </div>
                                                        <div className="title-entry">follow on twitch</div>
                                                        <div className="entry-link"><a href="#">EDIT</a></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="youtube-bg entry-listing color-white">
                                                        <div className="Entry-list-icon"><i
                                                            className="fa fa-youtube-play" aria-hidden="true"/></div>
                                                        <div className="toggle-lable">
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked/>
                                                                <span className="slider round"/>
                                                            </label>
                                                        </div>
                                                        <div className="title-entry">watch youtube video</div>
                                                        <div className="entry-link"><a href="#">EDIT</a></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="twitter-bg entry-listing color-white">
                                                        <div className="Entry-list-icon"><i className="fa fa-twitter"
                                                                                            aria-hidden="true"/></div>
                                                        <div className="toggle-lable">
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked/>
                                                                <span className="slider round"/>
                                                            </label>
                                                        </div>
                                                        <div className="title-entry">retweet on twitter</div>
                                                        <div className="entry-link"><a href="#">EDIT</a></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="facebook-bg entry-listing color-white">
                                                        <div className="Entry-list-icon"><i className="fa fa-facebook"
                                                                                            aria-hidden="true"/></div>
                                                        <div className="toggle-lable">
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked/>
                                                                <span className="slider round"/>
                                                            </label>
                                                        </div>
                                                        <div className="title-entry">visit facebook page</div>
                                                        <div className="entry-link"><a href="#">EDIT</a></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="steam-bg entry-listing color-white">
                                                        <div className="Entry-list-icon"><i className="fa fa fa-steam"
                                                                                            aria-hidden="true"/></div>
                                                        <div className="toggle-lable">
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked/>
                                                                <span className="slider round"/>
                                                            </label>
                                                        </div>
                                                        <div className="title-entry">join steam group</div>
                                                        <div className="entry-link"><a href="#">EDIT</a></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="Entry-list">
                                            <ul>
                                                <li>
                                                    <div className="discord-bg entry-listing color-white">
                                                        <div className="Entry-list-icon"><i className="fa fa-slideshare"
                                                                                            aria-hidden="true"/></div>
                                                        <div className="toggle-lable">
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked/>
                                                                <span className="slider round"/>
                                                            </label>
                                                        </div>
                                                        <div className="title-entry">join discord</div>
                                                        <div className="entry-link"><a href="#">EDIT</a></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="twitch-bg entry-listing color-white">
                                                        <div className="Entry-list-icon"><i className="fa fa-twitch"
                                                                                            aria-hidden="true"/></div>
                                                        <div className="toggle-lable">
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked/>
                                                                <span className="slider round"/>
                                                            </label>
                                                        </div>
                                                        <div className="title-entry">follow on twitch</div>
                                                        <div className="entry-link"><a href="#">EDIT</a></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="youtube-bg entry-listing color-white">
                                                        <div className="Entry-list-icon"><i
                                                            className="fa fa-youtube-play" aria-hidden="true"/></div>
                                                        <div className="toggle-lable">
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked/>
                                                                <span className="slider round"/>
                                                            </label>
                                                        </div>
                                                        <div className="title-entry">watch youtube video</div>
                                                        <div className="entry-link"><a href="#">EDIT</a></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="twitter-bg entry-listing color-white">
                                                        <div className="Entry-list-icon"><i className="fa fa-twitter"
                                                                                            aria-hidden="true"/></div>
                                                        <div className="toggle-lable">
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked/>
                                                                <span className="slider round"/>
                                                            </label>
                                                        </div>
                                                        <div className="title-entry">retweet on twitter</div>
                                                        <div className="entry-link"><a href="#">EDIT</a></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="facebook-bg entry-listing color-white">
                                                        <div className="Entry-list-icon"><i className="fa fa-facebook"
                                                                                            aria-hidden="true"/></div>
                                                        <div className="toggle-lable">
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked/>
                                                                <span className="slider round"/>
                                                            </label>
                                                        </div>
                                                        <div className="title-entry">visit facebook page</div>
                                                        <div className="entry-link"><a href="#">EDIT</a></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="steam-bg entry-listing color-white">
                                                        <div className="Entry-list-icon"><i className="fa fa fa-steam"
                                                                                            aria-hidden="true"/></div>
                                                        <div className="toggle-lable">
                                                            <label className="switch">
                                                                <input type="checkbox" defaultChecked/>
                                                                <span className="slider round"/>
                                                            </label>
                                                        </div>
                                                        <div className="title-entry">join steam group</div>
                                                        <div className="entry-link"><a href="#">EDIT</a></div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="center">
                                        <button className="own-btn btn btn-blue btn-primary uppercase">start giveaway
                                        </button>
                                    </div>
                                </form>
                            </div>
                            {/*partner tab*/}
                            <div id="partner" className="tabcontent">
                                <h1>become partner</h1>
                            </div>
                        </div>
                        <div className="footer-top-gap"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserSettings