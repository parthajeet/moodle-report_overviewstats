YUI.add("moodle-report_overviewstats-charts",function(e,t){M.report_overviewstats=M.report_overviewstats||{},M.report_overviewstats.charts=M.report_overviewstats.charts||{},M.report_overviewstats.charts.countries={init:function(t){var n=new e.Chart({type:"bar",categoryKey:"country",verticalGridlines:!0,dataProvider:t});e.one("#chart_countries").setStyle("backgroundImage","none"),n.render("#chart_countries")}},M.report_overviewstats=M.report_overviewstats||{},M.report_overviewstats.charts=M.report_overviewstats.charts||{},M.report_overviewstats.charts.enrolments={init:function(t){var n=new e.Chart({type:"combo",dataProvider:t.lastmonth,categoryKey:"date",horizontalGridlines:!0,verticalGridlines:!0,styles:{axes:{date:{label:{rotation:-90}}}}});e.one("#chart_enrolments_lastmonth").setStyle("backgroundImage","none"),n.render("#chart_enrolments_lastmonth");var r=new e.Chart({type:"combo",dataProvider:t.lastyear,categoryKey:"date",horizontalGridlines:!0,verticalGridlines:!0,styles:{axes:{date:{label:{rotation:-90}}}}});e.one("#chart_enrolments_lastyear").setStyle("backgroundImage","none"),r.render("#chart_enrolments_lastyear")}},M.report_overviewstats=M.report_overviewstats||{},M.report_overviewstats.charts=M.report_overviewstats.charts||{},M.report_overviewstats.charts.langs={init:function(t){var n=new e.Chart({type:"bar",categoryKey:"language",verticalGridlines:!0,dataProvider:t});e.one("#chart_langs").setStyle("backgroundImage","none"),n.render("#chart_langs")}},M.report_overviewstats=M.report_overviewstats||{},M.report_overviewstats.charts=M.report_overviewstats.charts||{},M.report_overviewstats.charts.modules={init:function(t){var n=new e.Chart({type:"pie",categoryKey:"module",seriesKeys:["count"],dataProvider:t.instances,legend:{position:"right",width:300,height:300,styles:{hAlign:"center",hSpacing:4}},seriesCollection:[{categoryKey:"module",valueKey:"count"}]});e.one("#chart_modules_instances").setStyle("backgroundImage","none"),n.render("#chart_modules_instances");var r=new e.Chart({type:"column",categoryKey:"indicator",dataProvider:t.usage,horizontalGridlines:!0,styles:{axes:{indicator:{label:{rotation:-90}}}}});e.one("#chart_modules_usage").setStyle("backgroundImage","none"),r.render("#chart_modules_usage")}}},"@VERSION@",{requires:["base","node","charts","charts-legend"]});