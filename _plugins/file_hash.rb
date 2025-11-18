require 'digest'

module Jekyll
  module FileHash
    # store computed hashes in a hash
    @@hash_cache = {}

    def md5_short(path)
      # return cached hash if available
      return @@hash_cache[path] if @@hash_cache.key?(path)

      abs_path = File.join(Dir.pwd, path)
      full_hash = Digest::MD5.file(abs_path).hexdigest
      short_hash = full_hash[0..10]

      # store in cache
      @@hash_cache[path] = short_hash
      short_hash
    end
  end
end

Liquid::Template.register_filter(Jekyll::FileHash)
