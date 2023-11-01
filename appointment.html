<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">
        <link href="style/app.css" rel="stylesheet">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

        <link rel="icon" href="img/scissors.ico" type="image/x-icon" />
        
    </head>
    <body>
    <div id="section1">
        <div class="heading">
            <div class="hamburger">
                <span></span>
                <span class="ham_span"></span>
                <span></span>
            </div>
            <div class="logo">
                <img src="https://www.dropbox.com/scl/fi/4den5uqwjcphlh5fvrhii/barberlogo.png?rlkey=y9mm83pq7o9w617iyfj8mgdu8&raw=1"
                    alt="" />
            </div>
            <div class="navbar">
                <ul>
                    <li><a href="index.php">Home</a></li>
                    <li><a href="index.php#section2">About</a></li>
                    <li><a href="index.php#sectioncontact">Contact</a></li>
                </ul>
            </div>
            <div class="appoinmentBox">
                <button><a class="appBox" href="appointment.php">Maak een afspraak</a></button>
            </div>
        </div>
        <div class="y-appointment-wrapper">
                <div class="appointment-notification"></div>
                <form action="">
                    <fieldset class="field-set-reset">
                        <legend class="title">Kies een datum en tijd</legend>
                        <div class="date-pick"  data-selected-id=-1>
                            <div class="scroll-btn left">
                                <span class="scroll-img-wrap">
                                    <svg "20px" height="30px">
                                        <path fill="#ccc" d="M16.1,32l3.9-3.9L7.9,16L20,3.9L16.1,0L0,16L16.1,32z M17.1,3.9L5, 16l12.1,12.1l-1.1,1.1L2.9,16L16.1,2.9L17.1,3.9z" />
                                    </svg>
                                </span>
                            </div>
                            <div class="date-wrapper">
                                <div class="date-scroll-container">
                                   <!--<label for="" class="timecell">
                                        <input type="radio">
                                        <span class="fill-box"></span>
                                        <span class="time-day">Mon</span>
                                        <span class="time-date">1</span>
                                        <span class="time-month">May.</span>
                                        <span class="time-available">5 available</span>
                                    </label>-->
                                </div>
                            </div>
                            <div class="scroll-btn right">
                                <span class="scroll-img-wrap">
                                    <svg width="20px" height="30px">
                                        <path fill="#ccc" d="M3.9,0L0,3.9L12.1,16L0,28.1L3.9,32L20,16L3.9,0z M2.9,28.1L15, 16L2.9,3.9l1.1-1.1L17.1,16L3.9,29.1L2.9,28.1z"></path>
                                    </svg>
                                 </span>
                            </div>
                        </div>
                        <div class="time-pick" data-ts-selected-id=-1>
                            <section>
                                <div class="time-slot morning">
                                    <h3 class="slot-heading">Ochtend</h3>
                                    <div class="slot">
                                        <label class="time-slice" for="" option-id="0">
                                            <input type="radio">
                                            <span>11:20</span>
                                        </label>
                                        <label class="time-slice" for="" option-id="1">
                                            <input type="radio">
                                            <span>11:40</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="time-slot afternoon">
                                    <h3 class="slot-heading">Middag</h3>
                                    <div class="slot">
                                        <label class="time-slice" for="" option-id="2"> 
                                            <input type="radio">
                                            <span>12:40</span>
                                        </label>
                                        <label class="time-slice" for="" option-id="3">
                                            <input type="radio">
                                            <span>16:00</span>
                                        </label>
                                        <label class="time-slice" for="" option-id="4">
                                            <input type="radio">
                                            <span>16:20</span>
                                        </label>
                                        <label class="time-slice" for="" option-id="5">
                                            <input type="radio">
                                            <span>16:40</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="time-slot evening">
                                    <h3 class="slot-heading">Avond</h3>
                                    <div class="slot">
                                        <label class="time-slice" for="" option-id="6">
                                            <input type="radio">
                                            <span>18:00</span>
                                        </label>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </fieldset>
                </form>
            </div>     
    </div>
            
            <script>
                
                
                (function(doc, win, $, undefined){
                    'use strict';
                    dataInit();
                    scrollEventBinder($);
                    timeCellClickEvent($);
                    timeSliceClickEvent($);

                    function dataInit(){
                        var datetimes = [
                            // {
                                // "day":0,
                                // "date":0,
                                // "month":"May",
                                // "available":10
                            // }
                        ];
                        var scContainer = doc.querySelectorAll('.date-scroll-container')[0];
                        var days = ["Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag", "Maandag", "Dinsdag"]
                        for(var i = 0 ; i < 30 ; i++){
                            var item = {
                                "day":days[i%7],
                                "date":i+1,
                                "month":"November",
                                "available":"3 available"
                            }
                            scContainer.appendChild(getTemplate(interpolate(i, item)));
                        }
                    }
                    function interpolate(idx, dItem){
                        return `<label option-id=${idx} class="timecell">\
                            <span class="date-item">
                                <input type="radio">\
                                <span class="fill-box"></span>\
                                <span class="time-day">${dItem.day}</span>\
                                <span class="time-date">${dItem.date}</span>\
                                <span class="time-month">${dItem.month}</span>\
                                <span class="time-available">${dItem.available}</span>\
                            </span>
                        </label>`;
                    }
                    function getTemplate(html){
                        var template = doc.createElement('template');
                        template.innerHTML = html;
                        return template.content.firstChild;
                    }
                    function scrollEventBinder($){
                        var dsc = $('.date-scroll-container')[0];
                        $('.scroll-btn.left').on('click', function(){ 
                            dsc.scrollLeft -= dsc.clientWidth;
                        });
                        $('.scroll-btn.right').on('click', function(){
                            dsc.scrollLeft += dsc.clientWidth;
                        });
                    }
                    function timeCellClickEvent($){
                        var $dp = $('.date-pick');
                        $('.timecell').click(function(){
                            var sidx = +$dp.attr('data-selected-id');
                            if(sidx !== -1){
                                $('.timecell[option-id="'+sidx+'"]').removeClass("selected");
                            }
                            $dp.attr('data-selected-id', $(this).attr("option-id"));
                            $(this).addClass('selected');
                        });
                    }
                    function timeSliceClickEvent($){
                        var $tp = $('.time-pick');
                        $('.time-slice').click(function(){
                            var tsidx = +$tp.attr('data-ts-selected-id');
                            if(tsidx !== -1){
                                $('.time-slice[option-id="'+tsidx+'"]').removeClass("selected");
                            }
                            $tp.attr('data-ts-selected-id', $(this).attr("option-id"));
                            $(this).addClass('selected');
                        });
                    }
                })(document, window, $);
        </script>   
    </body>
</html>