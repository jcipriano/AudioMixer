(function(){

  var Mixer = this.Mixer = { };
  
  Mixer.channels = { };
  Mixer.numChannels = 0;
  
  Mixer.setup = function(audioFiles) {
    var that = this
    $.each(audioFiles, function(i, audioData){
      var channel= new Mixer.Channel(audioData);
      $('body').append(channel.render());
      that.channels[audioData.id] = channel;
      that.numChannels = that.numChannels + 1;
    });
    
    return Mixer.channels;
    
  };
  
  Mixer.Channel = function(audioData) {
    
    console.log(audioData);
      
    var audioTmpl = '<audio id="mixer-channel-{{id}}" preload="auto"><source src="{{source}}.mp3" type="audio/mpeg"><source src="{{source}}.ogg" type="audio/ogg"></audio><br/>';
    
    this.data = audioData;
    
    this.render = function() {
      this.el = $(Mustache.render(audioTmpl, audioData));
      this.audio = $(this.el)[0];
      return this.el;
    };
    
  };
  
})();