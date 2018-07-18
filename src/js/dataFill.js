export function dataFill(){
    let karcher_offer = [
        {
            name:"Odkurzacz piorący",
            img:"./images/odk.jpg"
        },
        {
            name:"Myjka Ciśnieniowa",
            img:"./images/myjka.jpg"
        },
        {
            name:"Odkurzacz na sucho",
            img:"./images/sucho.jpg"
        },
        {
            name:"Odkurzacz na mokro",
            img:"./images/mokro.jpg"
        },
        {
            name:"Parownica",
            img:"./images/parownica.jpg"
        }
    ]
    let graves_pricing = [
        {
            st_1: ["od 35zł", "99zł", "182zł", "336zł"],
            st_2: ["od 45zł","128zł","235zł","435zł"],
            st_3: ["od 50zł","142zł","261zł","480zł"]
        },
        {
            st_1: ["od 50zł","140zł","261zł","480zł"],
            st_2: ["od 60zł","171zł","313zł","576zł"],
            st_3: ["od 80zł","228zł","417zł","768zł"]
        },
        {
            st_1: ["od 65zł","185zł","339zł","624zł"],
            st_2: ["od 75zł","213zł","391zł","720zł"],
            st_3: ["od 90zł","256zł","469zł","870zł"] 
        }
    ];
    //karcher offer
    karcher_offer.forEach(elem =>{
        $("#karcher .row").append(`
        <div class="col-lg-6 col-md-12 desc">
            <div class="p-image">
                <img src="${elem.img}"/>
            </div>
            <div class="p-desc">
                ${elem.name}
            </div>
        </div>
    `)
    })

    //graves pricing
    let graves_pricing_colors = ['#3ea9f5','#5e8dea','#3769cc'];
    fillTable(0);
    $(".pack-wrapper").each(function(index){
        $(this).click(function(){
            $(".pack-wrapper").addClass("hide")
            $(this).removeClass("hide");
            $("#graves-pricing").find("tr:gt(0)").remove();
            fillTable(index);
            $('body').scrollTo($(`#graves-pricing-header`).offset().top-80,550);
        })
    })
    function fillTable(idx){
        $("#graves-pricing tr:first td").css({"background-color":`${graves_pricing_colors[idx]}`});
        $("#graves-pricing tr:last").after(
        `
        <tr><th>Grób pojedynczy</th><td>${graves_pricing[idx].st_1[0]}</td><td>${graves_pricing[idx].st_1[1]}</td><td>${graves_pricing[idx].st_1[2]}</td><td>${graves_pricing[idx].st_1[3]}</td></tr>
        <tr><th>Grób podwójny</th><td>${graves_pricing[idx].st_2[0]}</td><td>${graves_pricing[idx].st_2[1]}</td><td>${graves_pricing[idx].st_2[2]}</td><td>${graves_pricing[idx].st_2[3]}</td></tr><tr>
        <th>Grób rodzinny</th> <td>${graves_pricing[idx].st_3[0]}</td><td>${graves_pricing[idx].st_3[1]}</td><td>${graves_pricing[idx].st_3[2]}</td><td>${graves_pricing[idx].st_3[3]}</td></tr>
        `);
    }
}
