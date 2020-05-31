// Pakacge
import $ from "jquery";
import axios from "axios";
import moment from "moment";

// Data
import league from "../data/league.js";

// Component
import "../component/home-page.js";
import "../component/content-page.js";
import "../component/league-list.js";

const main = () => {
    const baseUrl = "https://www.thesportsdb.com/api/v1/json/1/";     
    
    // set home page
    const homePage = document.createElement("home-page");
    homePage.data = league;
    
    $("main").html(homePage)
    
    // checking for dark mode
    const lsDarkMode = (localStorage.getItem('dark-mode')) ? localStorage.getItem('dark-mode') : 0;
    if (lsDarkMode == 1) {
        $("body").removeClass("bg-main");
        $("body").addClass("bg-main-dark");

        $("#content-bar").removeClass("bg-white");
        $("#content-bar").addClass("bg-dark");

        $("#card-descripton").removeClass("bg-white");
        $("#card-descripton").addClass("bg-dark");

        $("#modal-content").addClass("bg-dark text-light");
    } else {
        $("body").addClass("bg-main");
        $("body").removeClass("bg-main-dark");
        
        $("#content-bar").addClass("bg-white");
        $("#content-bar").removeClass("bg-dark");
        
        $("#card-descripton").addClass("bg-white");
        $("#card-descripton").removeClass("bg-dark");

        $("#modal-content").removeClass("bg-dark text-light");
    }

    const contentList = document.createElement("league-list");
    $("#content-list").html(contentList)

    // get fixtures
    const getFixtures = (idLeague) => {
        axios.get(`${baseUrl}eventsnextleague.php?id=${idLeague}`)
        .then(function (response) {
            $("#fixtures-list").html('')
            $("#loading-fixtures").attr('hidden', true);
            const dataEvents = response.data.events;
            if (dataEvents) {
                dataEvents.forEach(value => {
                    const fixturesItem = `<tr>
                                            <td width="27%">${moment(value.dateEvent).format("DD MMMM YYYY")}</td>
                                            <td align="right" width="35%">${value.strHomeTeam}</td>
                                            <td align="center" width="3%">vs</td>
                                            <td width="35%">${value.strAwayTeam}</td>
                                        </tr>`
                    $("#fixtures-list").append(fixturesItem)
                });
                
            } else {
                const fixturesItem = `<td align="center">Fixtures not found</td>`
                $("#fixtures-list").html(fixturesItem)
            }
        })
        .catch(function (error) {
            alert(error);
        })
    }

    // get klasemen
    const getKlasemen = (idLeague) => {
        axios.get(`${baseUrl}lookuptable.php?l=${idLeague}`)
        .then(function (response) {
            $("#klasemen-list").html('')
            $("#loading-table").attr('hidden', true);
            $(".table-content").removeAttr('hidden');
            const dataTable = response.data.table;
            if (dataTable) {
                let numberKlasemen = 0;
                dataTable.forEach(value => {
                    const klasemenItem = `<tr>
                                            <td>${++numberKlasemen}</td>
                                            <td>${value.name}</td>
                                            <td>${value.played}</td>
                                            <td>${value.win}</td>
                                            <td>${value.draw}</td>
                                            <td>${value.loss}</td>
                                            <td>${value.goalsdifference}</td>
                                            <td>${value.total}</td>
                                        </tr>`
                    $("#klasemen-list").append(klasemenItem)
                });
                
            } else {
                const klasemenItem = `<td align="center">Klasemen not found</td>`
                $("#klasemen-list").html(klasemenItem)
            }
        })
        .catch(function (error) {
            alert(error);
        })
    }

    // get Club
    const getClub = (idLeague) => {
        axios.get(`${baseUrl}lookup_all_teams.php?id=${idLeague}`)
        .then(function (response) {
            $("#club-list").html('')
            const dataClub = response.data.teams;

            if (dataClub) {
                dataClub.forEach(value => {
                    const clubItem = `<div class="col-xs-6 col-sm-4 col-md-2 col-lg-2 mb-3">
                                            <a href="#${value.strTeam}" class="select-team" onclick="select_team()"  data-id="${value.idTeam}"><img width="100%" src="${value.strTeamBadge}" alt="Card image cap"><a/>
                                        </div>`
                    $("#club-list").append(clubItem)
                });
                
            } else {
                const clubItem = `<td align="center">Club not found</td>`
                $("#club-list").html(clubItem)
            }
        })
        .catch(function (error) {
            alert(error);
        })
    }
    
    // select league
    $(".select-league").on('click', function () {
        $('#overlay').css("display", "block");
        const idLeague = $(this).data("id");
        axios.get(`${baseUrl}lookupleague.php?id=${idLeague}`)
        .then(function (response) {
            const leaguePage = document.createElement("content-page");
            leaguePage.data = response.data.leagues[0];
            
            $("main").html(leaguePage)
            $("content-bar").removeAttr("hidden")
            $('#overlay').css("display", "none");
            getFixtures(idLeague);
            getKlasemen(idLeague);
            getClub(idLeague);
        })
        .catch(function (error) {
            alert(error);
        })
    });

    // Show Profil
    $("#show-profil").on('click', function () {
        $('#modal-view').modal('show')
    })

    // Scroll to TOP
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Set Dark Mode
    const enDarkMode = () => {
        $("#dark-mode").text('Light Mode');

        $("body").removeClass("bg-main");
        $("body").addClass("bg-main-dark");

        $("#navbar-main").removeClass("navbar-light bg-white");
        $("#navbar-main").addClass("navbar-dark bg-dark");
        
        $(".card-home").removeClass("bg-white");
        $(".card-home").addClass("bg-dark");

        $(".card-content").removeClass("bg-white");
        $(".card-content").addClass("bg-dark text-light");

        $(".table-content").addClass("table-dark");
        
        $("#content-bar").removeClass("bg-white");
        $("#content-bar").addClass("bg-dark");

        $("#modal-content").addClass("bg-dark text-light");

        localStorage.setItem('dark-mode', 1);
    }
    
    const disDarkMode = () => {
        $("#dark-mode").text('Dark Mode');

        $("body").addClass("bg-main");
        $("body").removeClass("bg-main-dark");

        $("#navbar-main").addClass("navbar-light bg-white");
        $("#navbar-main").removeClass("navbar-dark bg-dark");

        $(".card-home").addClass("bg-white");
        $(".card-home").removeClass("bg-dark");

        $(".card-content").addClass("bg-white");
        $(".card-content").removeClass("bg-dark text-light");

        $(".table-content").removeClass("table-dark");

        $("#content-bar").addClass("bg-white");
        $("#content-bar").removeClass("bg-dark");

        $("#modal-content").removeClass("bg-dark text-light");

        localStorage.setItem('dark-mode', 0);
    }

    $("#dark-mode").on('click', () => {
        let darkMode = localStorage.getItem('dark-mode');
        if (darkMode == 1) {
            disDarkMode()
        } else {
            enDarkMode()
        }
    })
}

export default main;