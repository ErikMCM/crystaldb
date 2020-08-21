<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html lang="en">
<!--<![endif]-->

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="keywords" content="">

    <title>CrystalDB v1.2.1 Documentation</title>

    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">

    <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/stroke.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/animate.css">
    <link rel="stylesheet" type="text/css" href="css/prettyPhoto.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">

    <link rel="stylesheet" type="text/css" href="js/syntax-highlighter/styles/shCore.css" media="all">
    <link rel="stylesheet" type="text/css" href="js/syntax-highlighter/styles/shThemeRDark.css" media="all">

    <!-- CUSTOM -->
    <link rel="stylesheet" type="text/css" href="css/custom.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <div id="wrapper">

        <div class="container">

            <section id="top" class="section docs-heading">

                <div class="row">
                    <div class="col-md-12">
                        <div class="big-title text-center">
                            <h1>CrystalDB Documentation</h1>
                            <p class="lead">For CrystalDB v1.2.1</p>
                        </div>
                        <!-- end title -->
                    </div>
                    <!-- end 12 -->
                </div>
                <!-- end row -->

                <hr>

            </section>
            <!-- end section -->

            <div class="row">

                <div class="col-md-3">
                    <nav class="docs-sidebar" data-spy="affix" data-offset-top="300" data-offset-bottom="200" role="navigation">
                        <ul class="nav">
                            <li><a href="#line1">Getting Started</a></li>
                            <li><a href="#line2">How to Install CrystalDB</a></li>
                            <li><a href="#line7">Library Reference</a>
                                <ul class="nav">
                                    <li><a href="#line7_1">Initializing</a></li>
                                    <li><a href="#line7_2">Writing</a></li>
                                    <li><a href="#line7_3">Getting</a></li>
                                    <li><a href="#line7_4">Deleting</a></li>
                                </ul>
                            </li>
                            <li><a href="#line11">Copyright and License</a>
                        </ul>
                    </nav >
                </div>
                <div class="col-md-9">
                    <section id="line1" class="section">

                        <div class="row">
                            <div class="col-md-12 left-align">
                                <h2 class="dark-text">Getting Started</h2>
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->

                        <div class="row">
                            <div class="col-md-12">
                                <p>CrystalDB is a <a href="https://nodejs.org/" target="_blank">Node.js</a> module. This module is a NoSQL, JSON Database System. This system works similarly to other JSON Document Systems, but is boiled down, for simpler projects, where large database systems are not required. This system does all of the computing, and storing in the module, so all you have to do, is simply pass through, the file ID, and the data.</p>
                    <section id="line2" class="section">

                        <div class="row">
                            <div class="col-md-12 left-align">
                                <h2 class="dark-text">How to Install CrystalDB</h2>
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->


                        <hr>

                        <h4>Installing through the Command Prompt/terminal.</h4>

                        <p>You'll want to make sure you have Node.js installed, to install it go to the <a href="https://nodejs.org/en/download/" target="_blank">Node.js Downloads Page</a><br/><br/>CrystalDB's node module is "crystaldb". If you have installed node modules before, feel free to do it on your own, and skip ahead. If you have not, please watch the YouTube video below.</p>

                        <hr>
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2">
                                <div class="media">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/snFzbPm_RUE" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>

                        </div>

                    </section>
                    <!-- end section -->
                    <section id="line7" class="section">

                        <div class="row">
                            <div class="col-md-12 left-align">
                                <h2 class="dark-text">Library Reference</h2>
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->

                        <div class="row">
                            <div class="col-md-8">
                                <h4 id="line7_1">Initializing</h4>
                                <p>Initializing the Database will create all directories required. It is a good idea to keep it inside your code, incase a directory gets deleted, and needs to be restored, or if the function gets updated in a future update.</p>
                                <pre class="brush: js">
                                    const db = require("crystaldb");

                                    db.initialize();
                                </pre>
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->

                        <hr>

                        <div class="row">
                            <div class="col-md-8">
                                <h4 id="line7_2">Writing</h4>
                                <p>When you write data, you will need to pass through 2 arguments, the file ID, and the JSON Data. The file ID can be anything, from "foo" to "1036". The max size is 140 characters, and minimum of 1. In order to create a new file, simply write to it, as if it existed, it will automatically create it.</p>

                                <pre class="brush: js">
                                    const db = require("crystaldb");
                                    db.initialize();

                                    const jsonData = `{"foo": "bar", "beep": "boop"}`;
                                    db.write("file-ID", "jsonData");
                                </pre>
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->

                        <hr>

                        <div class="row">
                            <div class="col-md-8">
                                <h4 id="line7_3">Getting</h4>
                                <p>Getting data is a promise. When you get data, you will need to pass through 1 argument, the file ID. If there is an error, such as the file not existing, the promise will be rejected. The data returned is parsed JSON.</p>

                                <pre class="brush: js">
                                    const db = require("crystaldb");
                                    db.initialize();
                                    
                                    db.get("file-ID")
                                    .then(returnedData =>{
                                        console.log(returnedData.foo);
                                    }).catch(err => console.log(err));
                                </pre>
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->

                        <hr>

                        <div class="row">
                            <div class="col-md-8">
                                <h4 id="line7_4">Deleting</h4>
                                <p>Deleting data will delete any files with the file ID passed through. <b>This action is irreversible, and can not be undone</b> There will be an error if something is using the file, or the file is locked.</p>

                                <pre class="brush: js">
                                    const db = require("crystaldb");
                                    db.initialize();
                                    
                                    db.delete("file-ID");
                                </pre>
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->
                    </section>
                    <!-- end section -->
                    <section id="line11" class="section">

                        <div class="row">
                            <div class="col-md-12 left-align">
                                <h2 class="dark-text">Copyright and license</h2>
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->

                        <div class="row">
                            <div class="col-md-12">
                                
                                <p>CrystalDB code is released under the <a href="https://choosealicense.com/licenses/mit/" target="_blank">MIT License</a> License.</p>
                            
                            </div>
                        </div>
                        <!-- end row -->

                    </section>
                    <!-- end section -->
                </div>
                <!-- // end .col -->

            </div>
            <!-- // end .row -->

        </div>
        <!-- // end container -->

    </div>
    <!-- end wrapper -->

    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/retina.js"></script>
    <script src="js/jquery.fitvids.js"></script>
    <script src="js/wow.js"></script>
    <script src="js/jquery.prettyPhoto.js"></script>

    <!-- CUSTOM PLUGINS -->
    <script src="js/custom.js"></script>
    <script src="js/main.js"></script>

    <script src="js/syntax-highlighter/scripts/shCore.js"></script>
    <script src="js/syntax-highlighter/scripts/shBrushXml.js"></script>
    <script src="js/syntax-highlighter/scripts/shBrushCss.js"></script>
    <script src="js/syntax-highlighter/scripts/shBrushJScript.js"></script>

</body>

</html>
