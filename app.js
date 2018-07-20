$(function () {
    $('#mode-tog').change(function () {
        if ($(this).prop('checked') == true) {
            mode = 1;
        }
        else {
            mode = 0;
        }
        console.log("mode " + mode)
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-house-mode/set",
            data: {
                value: mode
            },
            dataType: "text",
            success: function (response) {

            }
        });
    })
    $('#door-tog').change(function () {
        if ($(this).prop('checked') == true) {
            door_cm = 1;
        }
        else {
            door_cm = 0;
        }
        console.log("door " + door_cm)
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-door_cm/set",
            data: {
                value: door_cm
            },
            dataType: "text",
            success: function (response) {

            }
        });
    })
    $('#light-tog').change(function () {
        if ($(this).prop('checked') == true) {
            light_cm = 1;
        }
        else {
            light_cm = 0;
        }
        console.log("light " + light_cm)
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-light_cm/set",
            data: {
                value: light_cm
            },
            dataType: "text",
            success: function (response) {

            }
        });
    })
    $('#air-tog').change(function () {
        if ($(this).prop('checked') == true) {
            air_cm = 1;
        }
        else {
            air_cm = 0;
        }
        console.log("air " + air_cm)
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-air_cm/set",
            data: {
                value: air_cm
            },
            dataType: "text",
            success: function (response) {

            }
        });
    })
    $('#ring-btn').on('click', function () {
        console.log("ringg 1")
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-ring_cm/set",
            data: {
                value: 1
            },
            dataType: "text",
            success: function (response) {

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
                <h1>${response}</h1> 
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
                <h1>${response}</h1> 
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
                $('#intense-val').html(`
                <h1>${response}</h1> 
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