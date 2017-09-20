import React, {Component} from "react";

class Video extends  Component{

    render(){
        return(
            <div className="Drivers">
                <br/>
                <h1>FanZone</h1>

                <form method="post" action="/videos">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div class="form-group">
                        <label>From</label>
                        <input type="text" class="form-control" placeholder="From" name="from"/>
                    </div>
                    <div class="form-group">
                        <label>Url of your video</label>
                        <input type="text" class="form-control" placeholder="Url" name="url"/>
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                </form>

            </div>
        )
    }
}

export default Video;