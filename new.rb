#!/usr/bin/env ruby

# *********************************************
# Jekyll Post Generator Awesomeness
# by Cody Krieger (http://codykrieger.com),
# updated by Ramanan Sivaranjan
# *********************************************

require 'optparse'


options = {}
OptionParser.new do |opts|
  options[:category] = 'blog'
  opts.banner = "Usage: new.rb [options] Post Title"
  opts.on("-c", "--category", "Set Category") do |c|
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

TEMPLATE = "new_post_template.md"
POSTS_DIR = "_posts"

# Get the title and use it to derive the new filename
title = ARGV.join(" ")
filename = "#{Time.now.strftime('%Y-%m-%d')}-#{title.parameterize}.md"
filepath = File.join(POSTS_DIR, filename)

category = options[:category]

date = Time.now.strftime('%F %I:%M %P')

# Load in the template and set the title
post_text = File.read(TEMPLATE)
post_text.gsub!('%%TITLE%%', title)
post_text.gsub!('%%CATEGORY%%', category)
post_text.gsub!('%%DATE%%', date)

# Write out the post
post_file = File.open(filepath, 'w')
post_file.puts post_text
post_file.close

puts "Successfully created file => #{filepath}"
