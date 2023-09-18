let extra = ["huevos", "vainillin"];
let frutas = ["banana", "manzana", "peras", "duraznos", extra];
let secos = ["harina", "avena", frutas , "coco-rayado", "canela"];
  
for (let ingredientes in secos) {
     
        if (ingredientes == 2) {
        
            for (let ingredientes in frutas) {
                    if (ingredientes == 4) {
                        for (ingredientes of extra) {
                            document.write (ingredientes + "<br>")
                              }
                    }

                    else {
                            document.write (frutas [ingredientes] + "<br>")
                    }
            }
        }
            
        
        else {
         document.write (secos [ingredientes] + "<br>")
        }
 }