<template>
  <div class = "row"> 
        <div class="col-md-12">
            <div class="panel panel-default">  
                <ul class="nav nav-tabs">
                        <router-link tag="li" :to="{ name: $route.params.componentName + '_FORM', params: {componentName: $route.params.componentName} }">
                            <a id="go-form" style="cursor: pointer;  color:#3AB0D5; padding-left: 15px; font-size: 15px;">Form</a>
                        </router-link>  
                        <router-link tag="li" :to="{ name: $route.params.componentName + '_PREVIEW', params: {componentName: $route.params.componentName} }">
                            <a id="preview-component" style="cursor: pointer;  color:#3AB0D5; font-size: 15px;">View</a>
                        </router-link> 
                        <router-view  tag="li" class="pull-right" name="subheader"></router-view>
                </ul>
               
                <div class="col-md-12">
                    <transition name="slide" mode="out-in">
                        <router-view></router-view>
                    </transition>  
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return { }   
    }
    
}
</script>