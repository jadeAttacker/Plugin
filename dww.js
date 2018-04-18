;(function($){
    $.fn.extend({
        "Sortable":function(){
            let table=$(this);
            headers=table.find('th');
            for(let i=0,len=headers.length;i<len;i++){
                    let flag=false;
                    headers.eq(i).click(function() {
                        let tbody=table.children('tbody').eq(0);
                        let rows=tbody.children('tr');
                        rows=Array.prototype.slice.call(rows,0);
                        rows.sort(function(row1,row2){
                            let val1=$(row1).children('td').eq(i).text();
                            let val2=$(row2).children('td').eq(i).text();
                            if(val1>val2){
                                return 1;
                            }else if(val1<val2){
                                return -1;
                            }else{
                                return 0;
                            }
                        });
                        if(flag){
                            rows.reverse();
                        }
                        tbody.append(rows);//具有自动循环的功能。
                        flag=!flag;
                    });
               
            }
            return this;
        }
    });
})(jQuery);