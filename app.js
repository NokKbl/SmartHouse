$(function () {
    $('#mode-tog').change(function () {
        if ($(this).prop('checked') == true) {
            mode = 1;
        }
        else {
            mode = 0;
        }
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-house-mode/set/",
            data: {
                value: mode
            },
            dataType: "text",
            success: function (response) {
                console.log(`mode   ${response}`)
            }
        });
    })
    $('#door-tog').change(function () {
        if ($(this).prop('checked') == true) {
            door_cm = 1;
            $('#door-img').html(`<img src="https://image.ibb.co/h9Y7yd/realdoor.png" alt="door" height="300px">`)
        }
        else {
            door_cm = 0;
            $('#door-img').html(`<img src="https://image.ibb.co/eaC9By/doorclose.png" alt="door" height="300px">`)
        }
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-door-cm/set/",
            data: {
                value: door_cm
            },
            dataType: "text",
            success: function (response) {
                console.log(`door   ${response}`)
            }
        });
    })
    $('#light-tog').change(function () {
        if ($(this).prop('checked') == true) {
            light_cm = 1;
            $('#light-img').html(`<img src="https://image.ibb.co/noBhWy/reallight.png" alt="light" height="300px">`)
        }
        else {
            light_cm = 0;
            $('#light-img').html(`<img src="https://image.ibb.co/eHs9By/lightout.png" alt="light" height="300px">`)
        }
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-light-cm/set/",
            data: {
                value: light_cm
            },
            dataType: "text",
            success: function (response) {
                console.log(`light   ${response}`)
            }
        });
    })
    $('#air-tog').change(function () {
        if ($(this).prop('checked') == true) {
            air_cm = 1;
            $('#air-img').html(`<img src="https://image.ibb.co/cczQjJ/realair.png" alt="air" height="300px">`)
        }
        else {
            air_cm = 0;
            $('#air-img').html(`<img src=" https://image.ibb.co/gAJhWy/closeair.png" alt="air" height="300px">`)
        }
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-air-cm/set/",
            data: {
                value: air_cm
            },
            dataType: "text",
            success: function (response) {
                console.log(`air   ${response}`)
            }
        });
    })
    $('#ring-btn').change(function () {
        if ($(this).prop('checked') == true) {
            ring_cm = 1;
            $('#bell-img').html(`<img src="https://image.ibb.co/khiudd/ringbell.png" alt="bell" height="300px">`)
        }
        else {
            ring_cm = 0;
            $('#bell-img').html(`<img src="https://image.ibb.co/h80WPJ/realbell.png" alt="bell" height="300px">`)
        }
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-ring-cm/set/",
            data: {
                value: ring_cm
            },
            dataType: "text",
            success: function (response) {
                console.log(`ring   ${response}`)
            }
        });
    })
    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-temp-val/view",
            dataType: "text",
            success: function (response) {
                $('#temp-val').html(`
                <label class="fontVal">${response}</label>
            `)
            },
            fail: function (response) {
                consloe.log(response)
            }
        });
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-humi-val/view",
            dataType: "text",
            success: function (response) {
                $('#humi-val').html(`
                <label class="fontVal">${response}</label>
            `)
            },
            fail: function (response) {
                consloe.log(response)
            }
        });
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-intense-val/view",
            dataType: "text",
            success: function (response) {
                if (response<0 || response>100000){
                    response=0
                }
                else if(response>0 && response<300){
                    $('#bgg').html(`<div style="background: url(https://image.ibb.co/ef4Zdd/nigth.png);"></div>`)
                }
                else{
                    $('#bgg').html(`<div style="background: url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Ha0T59ZIiq18yt35/animated-background-with-rural-landscape-with-country-houses-trees-and-clouds-town-landscape-seamless-loop-animation_hvy55hau__F0000.png);"></div>`)
                }
                $('#intense-val').html(`
                <label class="fontVal">${response}</label>
            `)
            },
            fail: function (response) {
                consloe.log(response)
            }
        });
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-door-st/view",
            dataType: "text",
            success: function (response) {
                $('#door-st').html(`
                <h1>${response}</h1> 
            `)
            },
            fail: function (response) {
                consloe.log(response)
            }
        });
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-light-st/view",
            dataType: "text",
            success: function (response) {
                $('#light-st').html(`
                <h1>${response}</h1> 
            `)
            },
            fail: function (response) {
                consloe.log(response)
            }
        });
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-air-st/view",
            dataType: "text",
            success: function (response) {
                $('#air-st').html(`
                <h1>${response}</h1> 
            `)
            },
            fail: function (response) {
                consloe.log(response)
            }
        });
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-bellring/view",
            dataType: "text",
            success: function (response) {
                $('#bellring').html(`
                <h1>${response}</h1> 
            `)
            },
            fail: function (response) {
                consloe.log(response)
            }
        });
    }, 1000)
})