#!/usr/bin/env ruby

# *********************************************
# Hugo Post Generator
# Originally by Cody Krieger (http://codykrieger.com),
# updated by Ramanan Sivaranjan for Hugo
# *********************************************

require 'optparse'
require 'fileutils'

options = {}
OptionParser.new do |opts|
  options[:category] = 'microblog'
  opts.banner = "Usage: new.rb [options] Post Title"
  opts.on("-c", "--category CATEGORY", "Set Category (default: microblog)") do |c|
    options[:category] = c
  end
end.parse!

class String
  # from ruby on rails (https://github.com/rails/rails)
  # activesupport/lib/active_support/inflector/transliterate.rb
  def parameterize(sep = '-')
    # replace accented chars with their ascii equivalents
    parameterized_string = self.dup
    # Turn unwanted chars into the separator
    parameterized_string.gsub!(/[^a-z0-9\-_]+/i, sep)
    unless sep.nil? || sep.empty?
      re_sep = Regexp.escape(sep)
      # No more than one of the separator in a row.
      parameterized_string.gsub!(/#{re_sep}{2,}/, sep)
      # Remove leading/trailing separator.
      parameterized_string.gsub!(/^#{re_sep}|#{re_sep}$/i, '')
    end
    parameterized_string.downcase
  end
end

CONTENT_DIR = "content"

# Get the title and use it to derive the new filename
title = ARGV.join(" ")
if title.empty?
  puts "Usage: new.rb [options] Post Title"
  exit 1
end

category = options[:category]
slug = title.parameterize
filename = "#{slug}.md"

# Ensure category directory exists
category_dir = File.join(CONTENT_DIR, category)
FileUtils.mkdir_p(category_dir)

filepath = File.join(category_dir, filename)

date = Time.now.strftime('%Y-%m-%dT%H:%M:%S%:z')

# Create post content
post_text = <<~HEREDOC
---
title: #{title}
date: #{date}
bluesky:
img:
tag: []
---

HEREDOC

# Write out the post
File.write(filepath, post_text)

puts "Successfully created file => #{filepath}"
