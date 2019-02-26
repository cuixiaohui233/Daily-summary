   // 方法
   function getParamByName(name, url) {
        let match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' ').replace('#', ''));
   }
   
   // 调用，筛选出来flightno对应的值
   getParamByName("flightno", window.location)
   
