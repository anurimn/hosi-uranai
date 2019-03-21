
        let ima = new Date();
        let day = ima.getDate();

        var defineYourFate = function(seiza,day){
            let fate = seiza + day;
            if(fate%5 == 0){
                location.href = "end/toohappy/toohappy.html";
            }
            if(fate%5 == 1){
                location.href = "end/happy/happy.html";
            }
            if(fate%5 == 2){
                location.href = "end/normal/normal.html";
            }
            if(fate%5 == 3){
                location.href = "end/bad/bad.html";
            }
            if(fate%5 == 4){
                location.href = "end/toobad/toobad.html";
            }

        };

        var defineYourSeizaNo = function(seiza){
            if(seiza == "おひつじ座"){
                return 1;
            }
            if(seiza == "おうし座"){
                return 2;
            }
            if(seiza == "ふたご座"){
                return 3;
            }
            if(seiza == "かに座"){
                return 4;
            }
            if(seiza == "しし座"){
                return 5;
            }
            if(seiza == "おとめ座"){
                return 6;
            }
            if(seiza == "てんびん座"){
                return 7;
            }
            if(seiza == "さそり座"){
                return 8;
            }
            if(seiza == "いて座"){
                return 9;
            }
            if(seiza == "やぎ座"){
                return 10;
            }
            if(seiza == "みずがめ座"){
                return 11;
            }
            if(seiza == "うお座"){
                return 12;
            }
        };

        window.onload = function(){
            document.getElementById("ohituzi").addEventListener("click", function(){
                defineYourFate( defineYourSeizaNo(document.getElementById("ohituzi").value),day);
            });
            document.getElementById("oushi").addEventListener("click", function(){
                defineYourFate( defineYourSeizaNo(document.getElementById("oushi").value),day);
            });
            document.getElementById("hutago").addEventListener("click", function(){
                defineYourFate( defineYourSeizaNo(document.getElementById("hutago").value),day);
            });
            document.getElementById("kani").addEventListener("click", function(){
            defineYourFate( defineYourSeizaNo(document.getElementById("kani").value),day);
            });
            document.getElementById("sisi").addEventListener("click", function(){
            defineYourFate( defineYourSeizaNo(document.getElementById("sisi").value),day);
            });
            document.getElementById("otome").addEventListener("click", function(){
            defineYourFate( defineYourSeizaNo(document.getElementById("otome").value),day);
            });
            document.getElementById("tennbinn").addEventListener("click", function(){
            defineYourFate( defineYourSeizaNo(document.getElementById("tennbinn").value),day);
            });
            document.getElementById("sasori").addEventListener("click", function(){
            defineYourFate( defineYourSeizaNo(document.getElementById("sasori").value),day);
            });
            document.getElementById("ite").addEventListener("click", function(){
            defineYourFate( defineYourSeizaNo(document.getElementById("ite").value),day);
            });
            document.getElementById("yagi").addEventListener("click", function(){
            defineYourFate( defineYourSeizaNo(document.getElementById("yagi").value),day);
            });
            document.getElementById("mizugame").addEventListener("click", function(){
            defineYourFate( defineYourSeizaNo(document.getElementById("mizugame").value),day);
            });
            document.getElementById("uo").addEventListener("click", function(){
            defineYourFate( defineYourSeizaNo(document.getElementById("uo").value),day);
            });
        }

