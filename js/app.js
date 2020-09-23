
var app = angular.module("hurreyApp", ['ngRoute', 'pascalprecht.translate', 'firebase', 'toastr']);

// app.
app.config(function ($translateProvider) {
    $translateProvider.translations("EN", {
      "NAME": "Name",
      "CITY": "City",
      "DISTRICT": "District",
      "COUNTRY": "Country",
      "SEARCH": "Search",
      "SHOW": "Show",
      "ADD_INSTITUTE": "Add Institute",
      "ADD_BATCH": "Add Batch",
      "INSTITUTE_DETAILS": "Institute Details",
      "BATCH_DETAILS": "Batch Details",
      "TRANSLATE": "Translate",
      "ADD_INSTITUTE_DATA": "Add Institute Data",
      "ADD_DATA": "ADD DATA",
      "EDIT_INSTITUTE_DATA": "Edit Institute Data",
      "UPDATE": "UPDATE",
      "ADD_BATCH_DATA": "Add Batch Data",
      "CLASS": "Class",
      "SUBJECT": "Subject",
      "FEE": "Fee",
      "BOARD": "Board",
      "BATCH_START_TIME": "Batch Start Time",
      "BATCH_END_TIME": "Batch End Time",
      "ADD_BATCH_DATA": "Add Batch Data",
      "EDIT_BATCH_DATA": "Edit Batch Data",
      "INSTITUTION": "Institution",
      "BATCH": "Batch",
      "EN": "EN",
      "HINDI": "Hindi",
      "PUNJABI": "Punjabi",
      "KANNADA": "Kannada",
      "TELUGU": "Telugu"
    });

    $translateProvider.translations("HINDI", {
      "NAME": "नाम",
      "CITY": "शहर",
      "DISTRICT": "जिला",
      "COUNTRY": "देश",
      "SEARCH": "खोज",
      "SHOW": "प्रदर्शन",
      "ADD_INSTITUTE": "संस्थान जोड़ें",
      "ADD_BATCH": "बैच जोड़ें",
      "INSTITUTE_DETAILS": "संस्थान का विवरण",
      "BATCH_DETAILS": "बैच विवरण",
      "TRANSLATE": "अनुवाद",
      "ADD_INSTITUTE_DATA": "संस्थान डेटा जोड़ें",
      "ADD_DATA": "डेटा जोड़ें",
      "EDIT_INSTITUTE_DATA": "संस्थान डेटा संपादित करें",
      "UPDATE": "अपडेट करें",
      "ADD_BATCH_DATA": "बैच डेटा जोड़ें",
      "CLASS": "कक्षा",
      "SUBJECT": "विषय",
      "FEE": "शुल्क",
      "BOARD": "मंडल",
      "BATCH_START_TIME": "बैच प्रारंभ समय",
      "BATCH_END_TIME": "बैच एंड टाइम",
      "ADD_BATCH_DATA": "बैच डेटा जोड़ें",
      "INSTITUTION": "संस्थान",
      "BATCH": "बैच",
      "EDIT_BATCH_DATA": "बैच डेटा संपादित करें",
      "EN": "अंग्रेज़ी",
      "HINDI": "हिन्दी",
      "PUNJABI": "पंजाबी",
      "KANNADA": "कन्नड़",
      "TELUGU": "तेलुगू"
    });

    $translateProvider.translations("PUNJABI", {
        "NAME": "ਨਾਮ",
        "CITY": "ਸ਼ਹਿਰ",
        "DISTRICT": "ਡਿਸਟ੍ਰਿਕਟ",
        "COUNTRY": "ਦੇਸ਼",
        "SEARCH": "ਖੋਜ",
        "SHOW": "ਦਿਖਾਓ",
        "ADD_INSTITUTE": "ਇੰਸਟੀਚਿ .ਟ ਸ਼ਾਮਲ ਕਰੋ",
        "ADD_BATCH": "ਬੈਚ ਸ਼ਾਮਲ ਕਰੋ",
        "INSTITUTE_DETAILS": "ਸੰਸਥਾ ਦੇ ਵੇਰਵੇ",
        "BATCH_DETAILS": "ਬੈਚ ਵੇਰਵਾ",
        "TRANSLATE": "ਅਨੁਵਾਦ",
        "ADD_INSTITUTE_DATA": "ਇੰਸਟੀਚਿ .ਟ ਡਾਟਾ ਸ਼ਾਮਲ ਕਰੋ",
        "ADD_DATA": "ਡੇਟਾ ਸ਼ਾਮਲ ਕਰੋ",
        "EDIT_INSTITUTE_DATA": "ਇੰਸਟੀਚਿ Dataਟ ਡਾਟਾ ਸੋਧੋ",
        "UPDATE": "ਅਪਡੇਟ",
        "ADD_BATCH_DATA": "ਬੈਚ ਡਾਟਾ ਸ਼ਾਮਲ ਕਰੋ",
        "CLASS": "ਕਲਾਸ",
        "SUBJECT": "ਵਿਸ਼ਾ",
        "FEE": "ਫੀਸ",
        "BOARD": "ਫੱਟੀ",
        "BATCH_START_TIME": "ਬੈਚ ਸ਼ੁਰੂ ਹੋਣ ਦਾ ਸਮਾਂ",
        "BATCH_END_TIME": "ਬੈਚ ਦੀ ਸਮਾਪਤੀ ਦਾ ਸਮਾਂ",
        "ADD_BATCH_DATA": "ਬੈਚ ਡਾਟਾ ਸ਼ਾਮਲ ਕਰੋ",
        "INSTITUTION": "ਸੰਸਥਾ",
        "BATCH": "ਬੈਚ",
        "EDIT_BATCH_DATA": "ਬੈਚ ਡਾਟਾ ਸੋਧੋ",
        "EN": "ਅੰਗਰੇਜ਼ੀ",
        "HINDI": "ਹਿੰਦੀ",
        "PUNJABI": "ਪੰਜਾਬੀ",
        "KANNADA": "ਕੰਨੜ",
        "TELUGU": "ਤੇਲਗੂ"
    });

    $translateProvider.translations("KANNADA", {
        "NAME": "ಹೆಸರು",
        "CITY": "ನಗರ",
        "DISTRICT": "ಜಿಲ್ಲೆ",
        "COUNTRY": "ದೇಶ",
        "SEARCH": "ಹುಡುಕಿ",
        "SHOW": "ತೋರಿಸು",
        "ADD_INSTITUTE": "ಇನ್ಸ್ಟಿಟ್ಯೂಟ್ ಸೇರಿಸಿ",
        "ADD_BATCH": "ಬ್ಯಾಚ್ ಸೇರಿಸಿ",
        "INSTITUTE_DETAILS": "ಸಂಸ್ಥೆಯ ವಿವರಗಳು",
        "BATCH_DETAILS": "ಬ್ಯಾಚ್ ವಿವರಗಳು",
        "TRANSLATE": "ಅನುವಾದಿಸು",
        "ADD_INSTITUTE_DATA": "ಇನ್ಸ್ಟಿಟ್ಯೂಟ್ ಡೇಟಾವನ್ನು ಸೇರಿಸಿ",
        "ADD_DATA": "ಡೇಟಾವನ್ನು ಸೇರಿಸಿ",
        "EDIT_INSTITUTE_DATA": "ಇನ್ಸ್ಟಿಟ್ಯೂಟ್ ಡೇಟಾವನ್ನು ಸಂಪಾದಿಸಿ",
        "UPDATE": "ನವೀಕರಿಸಿ",
        "ADD_BATCH_DATA": "ಬ್ಯಾಚ್ ಡೇಟಾವನ್ನು ಸೇರಿಸಿ",
        "CLASS": "ವರ್ಗ",
        "SUBJECT": "ವಿಷಯ",
        "FEE": "ಶುಲ್ಕ",
        "BOARD": "ಮಂಡಳಿ",
        "BATCH_START_TIME": "ಬ್ಯಾಚ್ ಪ್ರಾರಂಭದ ಸಮಯ",
        "BATCH_END_TIME": "ಬ್ಯಾಚ್ ಅಂತಿಮ ಸಮಯ",
        "ADD_BATCH_DATA": "ಬ್ಯಾಚ್ ಡೇಟಾವನ್ನು ಸೇರಿಸಿ",
        "INSTITUTION": "ಸಂಸ್ಥೆ",
        "BATCH": "ಬ್ಯಾಚ್",
        "EDIT_BATCH_DATA": "ಬ್ಯಾಚ್ ಡೇಟಾವನ್ನು ಸಂಪಾದಿಸಿ",
        "EN": "ಆಂಗ್ಲ",
        "HINDI": "ಹಿಂದಿ",
        "PUNJABI": "ಪಂಜಾಬಿ",
        "KANNADA": "ಕನ್ನಡ",
        "TELUGU": "ತೆಲುಗು"
    });

    $translateProvider.translations("TELUGU", {
        "NAME": "పేరు",
        "CITY": "నగరం",
        "DISTRICT": "జిల్లా",
        "COUNTRY": "దేశం",
        "SEARCH": "వెతకండి",
        "SHOW": "చూపించు",
        "ADD_INSTITUTE": "ఇన్స్టిట్యూట్ జోడించండి",
        "ADD_BATCH": "బ్యాచ్ జోడించండి",
        "INSTITUTE_DETAILS": "ఇన్స్టిట్యూట్ వివరాలు",
        "BATCH_DETAILS": "బ్యాచ్ వివరాలు",
        "TRANSLATE": "అనువదించండి",
        "ADD_INSTITUTE_DATA": "ఇన్స్టిట్యూట్ డేటాను జోడించండి",
        "ADD_DATA": "డేటాను జోడించండి",
        "EDIT_INSTITUTE_DATA": "ఇన్స్టిట్యూట్ డేటాను సవరించండి",
        "UPDATE": "సవరించండి",
        "ADD_BATCH_DATA": "బ్యాచ్ డేటాను జోడించండి",
        "CLASS": "తరగతి",
        "SUBJECT": "విషయం",
        "FEE": "ఫీజు",
        "BOARD": "బోర్డు",
        "BATCH_START_TIME": "బ్యాచ్ ప్రారంభ సమయం",
        "BATCH_END_TIME": "బ్యాచ్ ముగింపు సమయం",
        "ADD_BATCH_DATA": "బ్యాచ్ డేటాను జోడించండి",
        "INSTITUTION": "సంస్థ",
        "BATCH": "బ్యాచ్",
        "EDIT_BATCH_DATA": "బ్యాచ్ డేటాను సవరించండి",
        "EN": "ఆంగ్ల",
        "HINDI": "హిందీ",
        "PUNJABI": "పంజాబీ",
        "KANNADA": "కన్నడ",
        "TELUGU": "తెలుగు"
    });

    $translateProvider.preferredLanguage("EN");

  }).config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'show_institute.html',
        controller: 'showInstitute'
    })
    .when('/show_institute', {
        templateUrl: 'show_institute.html',
        controller: 'showInstitute'
    })
    .when('/add_institute', {
        templateUrl: 'add_institute.html',
        controller: 'addInstitute'
    })
    .when('/edit_institute/:id', {
        templateUrl: 'edit_institute.html',
        controller: 'editInstitute'
    })
    .when('/show_batch', {
        templateUrl: 'show_batch.html',
        controller: 'showBatch'
    })
    .when('/add_batch', {
        templateUrl: 'add_batch.html',
        controller: 'addBatch'
    })
    .when('/edit_batch/:id', {
        templateUrl: 'edit_batch.html',
        controller: 'editBatch'
    })
    .otherwise({
        templateUrl: '404.html'
    });


});

app.controller("MyCtrl", function ($scope, $translate) {
    $scope.language = "EN";
    $scope.changeLanguage = function () {
      $translate.use($scope.language);
    };
});
app.controller("showInstitute", function ($scope, $firebaseArray) {
    var ref = firebase.database().ref("institutes");
    $scope.records = $firebaseArray(ref);

    $scope.removeData = function (info) {
        $scope.records.$remove(info).then(function () {
            console.log(info);
        },
            function (error) {
                console.log(error);
            });
    }
});
app.controller("addInstitute", function ($scope, $firebaseArray, toastr) {
    var ref = firebase.database().ref("institutes");
    $scope.add = function () {

        function success(position) {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(latitude, longitude);
            $scope.institute.address.latitude = `${latitude}`;
            $scope.institute.address.longitude = `${longitude}`;

            $firebaseArray(ref).$add($scope.institute).then(function (ref) {
                toastr.success('', 'Data stored successfully.');
                $scope.institute.name = '';
                $scope.institute.address = {};
                $scope.institute.address.city = '';
                $scope.institute.address.district = '';
                $scope.institute.address.country = '';
                $scope.institute.address.latitude = '';
                $scope.institute.address.longitude = '';
            });

        }

        navigator.geolocation.getCurrentPosition(success);
    }
});
app.controller("editInstitute", function ($scope, toastr, $firebaseObject, $routeParams) {
    var id = $routeParams.id;
    var ref = firebase.database().ref("institutes/" + id);
    $scope.institute = $firebaseObject(ref);

    $scope.edit = function (id) {
        var ref = firebase.database().ref("institutes/" + id);
        ref.update({
                name: $scope.institute.name,
                address: {
                    city: $scope.institute.address.city,
                    district: $scope.institute.address.district,
                    country: $scope.institute.address.country,
                    latitude: $scope.institute.address.latitude,
                    longitude: $scope.institute.address.longitude
                }
            }).then(function(ref){
                toastr.success("","Data Updated Successfully");
            },function(error){
                toastr.error('','Data is not Upload');
            });
    }

});
app.controller("showBatch", function ($scope, $firebaseArray, toastr, $firebaseObject) {
    var ref = firebase.database().ref("batches");
    const records = $firebaseArray(ref);
    records.$loaded().then( function(data) {
        records.forEach(function (item, index) {
            const dataItem = item;
            dataItem.batch_end_time = new Date(dataItem.batch_end_time).toLocaleTimeString("en-US");
            dataItem.batch_start_time = new Date(dataItem.batch_start_time).toLocaleTimeString("en-US");
            dataItem.id = dataItem.$id;
            records[index] = dataItem
        });
        $scope.records = records;
    });
    $scope.removeData = function (info) {
        $scope.records.$remove(info).then(function () {
            console.log(info);
        },
            function (error) {
                console.log(error);
            });
    }
});
app.controller("addBatch", function ($scope, $firebaseArray, toastr) {
    var ref = firebase.database().ref("batches");

    $scope.add = function () {
        let clonedBatch = JSON.parse(JSON.stringify($scope.batch));

        clonedBatch.batch_start_time = new Date(clonedBatch.batch_start_time).toString();
        clonedBatch.batch_end_time = new Date(clonedBatch.batch_end_time).toString();
        console.log($scope.batch);
        $firebaseArray(ref).$add(clonedBatch).then(function (ref) {
            toastr.success('', 'Data stored successfully.');
            $scope.batch.name = '';
            $scope.batch.class = '';
            $scope.batch.subject = '';
            $scope.batch.fee = '';
            $scope.batch.board = '';
            $scope.batch.batch_start_time = '';
            $scope.batch.batch_end_time = '';
        });
    }
});

app.controller("editBatch", function ($scope, $firebaseArray, toastr, $firebaseObject, $routeParams) {
    var id = $routeParams.id;
    var ref = firebase.database().ref("batches/" + id);
    let obj = $firebaseObject(ref);

    obj.$loaded().then(function() {
        const finalData = {};

        angular.forEach(obj, function(value, key) {

            if (key === 'batch_start_time' || key === 'batch_end_time') {
                finalData[key] = new Date(value);
            } else {
                finalData[key] = value;
            }
            finalData.$id = obj.$id;
         });
        $scope.batch = finalData;
     });


    $scope.edit = function (id) {
        var ref = firebase.database().ref("batches/" + id);
        var start_time = new Date($scope.batch.batch_start_time).toString();
        var end_time = new Date($scope.batch.batch_end_time).toString();
        ref.update({
                name: $scope.batch.name,
                class: $scope.batch.class,
                subject: $scope.batch.subject,
                fee: $scope.batch.fee,
                board: $scope.batch.board,
                batch_start_time: start_time,
                batch_end_time: end_time
            }).then(function(ref){
                toastr.success("","Data Updated Successfully");
            },function(error){
                toastr.error('','Data is not Upload');
            });
    }

});