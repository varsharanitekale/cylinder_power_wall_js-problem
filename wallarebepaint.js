let wall={
    backet_paint_area:20,
    wall_width:78,
    wall_height:10,
    wall_area:function(){
        console.log(this.width_wall* this.wall_height);
        
    },
    
    bucket_req: function(){
        console.log(this.wall_area/this.backet_paint_area);
    }
}
 wall.bucket_req();  
 wall.wall_area();
    // let wall=()=>{
    //     var bucket_paint_area=document.getElementById('bucket_area').value;
    //     var wall_width=document.getElementById('wall_width').value;
    //     var wall_height=document.getElementById('wall_height').value;
    //     var answer=document.getElementById('answer_bucket')
    //     var wall_area=wall_width*wall_height;
    //     var bucket_req=wall_area/bucket_paint_area;
    //     answer.value="You need to have "+bucket_req+" buckets of paint. "
    // }