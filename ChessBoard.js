let chess = "";
for(let row =1; row<= 8; row++){
    for(let space = 1; space<= 8; space++){
        if ((row + space)%2==0){
            chess+=" ";
        }
        else{
        chess+="#";
        }
        }
   chess+="\n";
    }
    console.log(chess);
