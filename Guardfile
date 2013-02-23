
guard 'shell' do
  watch(%r{(src/clj/attack|test/attack/test)/.*\.clj}) do |m| 
    result = `lein test 2>&1`
    failed = /(Tests failed)/i.match result
    lines = /\(([^\)]+:\d+)\)/i.match result
    if failed.nil? || failed.captures.nil?
      n "Tests passed"
      puts failed
    else
      captures = []
      captures = lines.captures unless lines.nil? || lines.captures.nil?
      n "Tests failed: #{captures}"
    end
    result
  end
end
