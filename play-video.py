#!/usr/bin/python
print "Running python script play-video.py"
import os, random



randomfile = random.choice(os.listdir("js/videos"))
file = 'js/videos/'+ randomfile
print("Going to play: " + file)
os.system ('echo 0 > /sys/class/backlight/rpi_backlight/bl_power')
os.system ('omxplayer --aspect-mode stretch ' + file)
os.system ('echo 1 > /sys/class/backlight/rpi_backlight/bl_power')
