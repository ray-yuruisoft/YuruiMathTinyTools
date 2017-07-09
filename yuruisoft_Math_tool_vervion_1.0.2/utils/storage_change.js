function storage_deal(results){
    var Temp_ = results ;
    var Temp_global = getApp().globalData.user_storage_data;
    for( var k = 0 ; k < Temp_.length ; k++)
    {
        for( var j = 0 ; j < Temp_global.length ; j++)
            {
                if(Temp_[k].image_url == Temp_global[j].name)
                {
                    Temp_[k].colected = true;
                    break;
                }                                       
                else
                    Temp_[k].colected = false;
            }
    }
    return Temp_;
}
module.exports = {
	storage_deal: storage_deal
}

