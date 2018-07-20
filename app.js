$(function () {
    $('#mode-tog').change(function () {
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/tonpalm-house-mode/set",
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
        /*
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
    */
    })